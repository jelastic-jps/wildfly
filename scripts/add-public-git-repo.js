//@auth
//@req(name, url, branch)

var params = {
   name: name,
   envName: "${env.appid}",
   env: "${env.envName}",
   nodeId: "${nodes.build.first.id}",
   session: session,
   type: "git",
   context: "ROOT",
   url: url,
   branch: branch,
   keyId: null,
   login: null,
   password: null,
   autoupdate: true,
   interval: 1,
   autoResolveConflict: true
}

//add and build the project 
resp = jelastic.env.build.AddProject(params.envName, params.session, params.nodeId, params.name, params.type, params.url, params.keyId, params.login, params.password, params.env, params.context, params.branch, params.autoupdate, params.interval, params.autoResolveConflict);
if (resp.result != 0) return resp;
resp = jelastic.env.build.BuildDeployProject(params.envName, params.session, params.nodeId, resp.id);
return resp;
