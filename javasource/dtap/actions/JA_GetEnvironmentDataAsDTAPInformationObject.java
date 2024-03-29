// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package dtap.actions;

import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;
import com.mendix.webui.CustomJavaAction;
import dtap.helpers.DTAPHelper;
import dtap.proxies.DTAPInformation;

/**
 * Returns the DTAPInformation object and sets the following attributes:
 * - DTAPLevel
 * - ApplicationURL
 * - LastUpdatedOn
 * - MendixVersion
 * - ModelVersion
 * - ApplicationName
 * 
 */
public class JA_GetEnvironmentDataAsDTAPInformationObject extends CustomJavaAction<IMendixObject>
{
	public JA_GetEnvironmentDataAsDTAPInformationObject(IContext context)
	{
		super(context);
	}

	@java.lang.Override
	public IMendixObject executeAction() throws Exception
	{
		// BEGIN USER CODE
		// Get helper instance
		DTAPHelper helper = DTAPHelper.getInstance();
		
		// Get stored DTAP information
		DTAPInformation sysDTAPInformation = helper.getDTAPInformationInstance();
		
		// Since stored DTAP information is in system context we need to copy it over to a user context object which we will return
		DTAPInformation userDTAPInformation = new DTAPInformation(getContext());
		userDTAPInformation.setDTAPLevel(getContext(), sysDTAPInformation.getDTAPLevel(helper.sysContext));
		userDTAPInformation.setDTAPLevelAsInteger(getContext(), sysDTAPInformation.getDTAPLevelAsInteger(helper.sysContext));
		userDTAPInformation.setCurrentEnvironment(getContext(), sysDTAPInformation.getCurrentEnvironment(helper.sysContext));
		userDTAPInformation.setApplicationURL(getContext(), sysDTAPInformation.getApplicationURL(helper.sysContext));
		userDTAPInformation.setLastUpdatedOn(getContext(), sysDTAPInformation.getLastUpdatedOn(helper.sysContext));
		userDTAPInformation.setMendixVersion(getContext(), sysDTAPInformation.getMendixVersion(helper.sysContext));
		userDTAPInformation.setModelVersion(getContext(), sysDTAPInformation.getModelVersion(helper.sysContext));
		
		return userDTAPInformation.getMendixObject();
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "JA_GetEnvironmentDataAsDTAPInformationObject";
	}

	// BEGIN EXTRA CODE
	
	// END EXTRA CODE
}
