package dtap.helpers;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.net.UnknownHostException;
import java.util.Date;

import com.mendix.thirdparty.org.json.JSONObject;
import com.mendix.thirdparty.org.json.JSONTokener;

import com.mendix.core.Core;
import com.mendix.core.conf.RuntimeVersion;
import com.mendix.logging.ILogNode;
import com.mendix.systemwideinterfaces.core.IContext;

import dtap.proxies.DTAPInformation;
import dtap.proxies.ENU_DTAP_Level;
import dtap.proxies.ENU_Environment;
import dtap.proxies.constants.Constants;

public class DTAPHelper {
	
	/** The instance. */
	private static DTAPHelper instance = null;
	private static DTAPInformation dTAPInformation = null;
	public IContext sysContext = null;
	
	private static ILogNode _logger = Core.getLogger("DTAP");
	
	private DTAPHelper() {
		this.sysContext = Core.createSystemContext();
	}

	/**
	 * Gets the single instance of DTAPHelper.
	 *
	 * @return single instance of DTAPHelper
	 */
	public static DTAPHelper getInstance() {
		_logger.trace("DTAPHelper - get instance");
		if(instance == null) {
			instance = new DTAPHelper();
			_logger.trace("DTAPHelper - initiate new instance");
		}
		return instance;
	}
	
	public DTAPInformation getDTAPInformationInstance() throws Exception {
		try {
			_logger.debug("Retrieving DTAPInformation object");
			if(dTAPInformation == null) {
				_logger.debug("Creating new DTAPInformation object");
				dTAPInformation = new DTAPInformation(this.sysContext);
				dTAPInformation.setDTAPLevel(this.sysContext, getApplicationDTAPLevel());
				dTAPInformation.setDTAPLevelAsInteger(this.sysContext, getDTAPLevelAsInteger());
				dTAPInformation.setCurrentEnvironment(this.sysContext, getCurrentEnvironment());
				dTAPInformation.setApplicationURL(this.sysContext, getApplicationURL());
				dTAPInformation.setLastUpdatedOn(this.sysContext, getLastUpdatedOn());
				dTAPInformation.setMendixVersion(this.sysContext, getMendixVersion());
				dTAPInformation.setModelVersion(this.sysContext, getModelVersion());
			}			
			
			return dTAPInformation;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	private ENU_DTAP_Level getApplicationDTAPLevel() {
		try {
			ENU_DTAP_Level DTAPLevel = ENU_DTAP_Level.valueOf(Constants.getDTAPMode());
			_logger.debug("DTAPLevel: " + DTAPLevel);
	        return DTAPLevel;
	    } catch (Exception e) {
	        return null;
	    }
	}
	
	private int getDTAPLevelAsInteger() {
		try {
			int DTAPLevel = Integer.parseInt(getApplicationDTAPLevel().getCaption());
			_logger.debug("DTAPLevelAsInteger:" + DTAPLevel);
	        return DTAPLevel;
	    } catch (Exception e) {
	        return -1;
	    }
	}
	
	private ENU_Environment getCurrentEnvironment() {
		if(getApplicationDTAPLevel() != null) {
			return ENU_Environment.valueOf(getApplicationDTAPLevel().name());
		}
		return ENU_Environment.Other;
	}
	
	private String getApplicationURL() throws UnknownHostException {
		_logger.debug("Application URL: " + Core.getConfiguration().getApplicationRootUrl());
		return Core.getConfiguration().getApplicationRootUrl();
	}
	private Date getLastUpdatedOn() {
		try {
			File f = Core.getConfiguration().getModelerFile();
			Date lastModifiedOn = new Date(f.lastModified());
			_logger.debug("lastModifiedOn: " + lastModifiedOn.toString());
			return lastModifiedOn;
		} catch(Exception e) {
			_logger.warn("Failed to get last modified on data");
			return (new Date());
		}		
	}
	private String getMendixVersion() {
		RuntimeVersion runtimeVersion = RuntimeVersion.getInstance();
		_logger.debug("Runtime version: " + runtimeVersion.toString());
        return runtimeVersion.toString();
	}
	private String getModelVersion() throws Exception {
		String modelVersion = getApplicationDTAPLevel().equals(ENU_DTAP_Level.Development) ? "development" : "";
		String major = "";
		String minor = "";
		String patch = "";
		String revision = "";
		try{
			_logger.debug("Start retrieving about information");
			File f = Core.getConfiguration().getModelerFile();
			_logger.debug("Retrieving modeler file: " + f.getAbsolutePath());
			FileInputStream input = new FileInputStream(f.getParent() + "/metadata.json");
			_logger.debug("Input stream metadata.json");
			InputStreamReader reader = new InputStreamReader(input);
			BufferedReader buffered = new BufferedReader (reader);

			_logger.debug("Start tokenizing");
			JSONTokener tokenizer = new JSONTokener(buffered);
			JSONObject jsonObject = new JSONObject(tokenizer);
			modelVersion = jsonObject.getString("ModelVersion");
			reader.close();
			input.close();
			//Core.getLogger("About").info("Model version: " + modelVersion);
			String[] versionNumber = modelVersion.split("\\.");
			_logger.debug("versionNumber: " + versionNumber.toString());
			if (versionNumber.length == 4){
				major = versionNumber[0];
				minor = versionNumber[1];
				patch = versionNumber[2];
				revision = versionNumber[3];
				modelVersion =  major + "." + minor + "." + patch + "." + revision;
			}else{
				modelVersion = "unversioned";				
			}			
		} catch (Exception e) {
			_logger.error("Error retrieving model version: " + e);			
		} 
		_logger.debug("modelVersion: " + modelVersion);
		return modelVersion;
	}
	
}
