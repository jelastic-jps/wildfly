import com.hivext.api.core.utils.Transport;
import com.hivext.api.development.Scripting;
import com.hivext.api.utils.Random;

var SOURCE_NODE = "${nodes.cp.master.id}";

var PASS_PATH = "/opt/wildfly/standalone/configuration/.pswd" ;

var resp = jelastic.env.file.Read('${env.envName}', session, PASS_PATH, null, null, SOURCE_NODE);

if (resp.result != 0) return resp;

var resetPasswordCmd = "/opt/wildfly/bin/add-user.sh" ;

var adminUserCredentials = "admin " + resp.body.replace(new RegExp("\\n", "g"), "");

jelastic.env.control.ExecCmdById('${env.envName}', session, SOURCE_NODE, toJSON([{ "command": "/usr/bin/rm -f", "params": PASS_PATH }]), false, "root");

return jelastic.env.control.ExecCmdByGroup('${env.envName}', session, "ctrl", toJSON([{ "command": resetPasswordCmd, "params": adminUserCredentials }]), false, false, "root");
