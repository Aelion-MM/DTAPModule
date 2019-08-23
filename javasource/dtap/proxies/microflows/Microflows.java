// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package dtap.proxies.microflows;

import java.util.HashMap;
import java.util.Map;
import com.mendix.core.Core;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.MendixRuntimeException;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;

public class Microflows
{
	// These are the microflows for the DTAP module
	public static void aCT_DTAPInformation_ShowExample(IContext context)
	{
		try
		{
			Map<java.lang.String, Object> params = new HashMap<java.lang.String, Object>();
			Core.execute(context, "DTAP.ACT_DTAPInformation_ShowExample", params);
		}
		catch (CoreException e)
		{
			throw new MendixRuntimeException(e);
		}
	}
	public static boolean aSU_DTAPInitialize(IContext context)
	{
		try
		{
			Map<java.lang.String, Object> params = new HashMap<java.lang.String, Object>();
			return (java.lang.Boolean)Core.execute(context, "DTAP.ASU_DTAPInitialize", params);
		}
		catch (CoreException e)
		{
			throw new MendixRuntimeException(e);
		}
	}
	public static dtap.proxies.DTAPInformation dS_DTAPInformation(IContext context)
	{
		try
		{
			Map<java.lang.String, Object> params = new HashMap<java.lang.String, Object>();
			IMendixObject result = (IMendixObject)Core.execute(context, "DTAP.DS_DTAPInformation", params);
			return result == null ? null : dtap.proxies.DTAPInformation.initialize(context, result);
		}
		catch (CoreException e)
		{
			throw new MendixRuntimeException(e);
		}
	}
	public static dtap.proxies.DTAPInformation dTAPInformation_GetCreate(IContext context)
	{
		try
		{
			Map<java.lang.String, Object> params = new HashMap<java.lang.String, Object>();
			IMendixObject result = (IMendixObject)Core.execute(context, "DTAP.DTAPInformation_GetCreate", params);
			return result == null ? null : dtap.proxies.DTAPInformation.initialize(context, result);
		}
		catch (CoreException e)
		{
			throw new MendixRuntimeException(e);
		}
	}
	public static java.lang.String dTAPInformation_RetrieveApplicationURL(IContext context)
	{
		try
		{
			Map<java.lang.String, Object> params = new HashMap<java.lang.String, Object>();
			return (java.lang.String)Core.execute(context, "DTAP.DTAPInformation_RetrieveApplicationURL", params);
		}
		catch (CoreException e)
		{
			throw new MendixRuntimeException(e);
		}
	}
	public static dtap.proxies.ENU_DTAP_Level dTAPInformation_RetrieveCurrentDTAP_Level(IContext context)
	{
		try
		{
			Map<java.lang.String, Object> params = new HashMap<java.lang.String, Object>();
			java.lang.String result = (java.lang.String)Core.execute(context, "DTAP.DTAPInformation_RetrieveCurrentDTAP_Level", params);
			if (result == null)
				return null;
			return dtap.proxies.ENU_DTAP_Level.valueOf(result);
		}
		catch (CoreException e)
		{
			throw new MendixRuntimeException(e);
		}
	}
	public static java.lang.Long dTAPInformation_RetrieveCurrentDTAP_Level_AsInteger(IContext context)
	{
		try
		{
			Map<java.lang.String, Object> params = new HashMap<java.lang.String, Object>();
			return (java.lang.Long)Core.execute(context, "DTAP.DTAPInformation_RetrieveCurrentDTAP_Level_AsInteger", params);
		}
		catch (CoreException e)
		{
			throw new MendixRuntimeException(e);
		}
	}
	public static dtap.proxies.ENU_Environment dTAPInformation_RetrieveCurrentEnvironment(IContext context)
	{
		try
		{
			Map<java.lang.String, Object> params = new HashMap<java.lang.String, Object>();
			java.lang.String result = (java.lang.String)Core.execute(context, "DTAP.DTAPInformation_RetrieveCurrentEnvironment", params);
			if (result == null)
				return null;
			return dtap.proxies.ENU_Environment.valueOf(result);
		}
		catch (CoreException e)
		{
			throw new MendixRuntimeException(e);
		}
	}
}