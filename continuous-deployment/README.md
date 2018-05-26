# WildFly Continuous Deployment Package 

#### 1 - Press Deploy button 
And choose a service provider after redirection to Jelasic Cloud Union.

[![Deploy](https://github.com/jelastic-jps/git-push-deploy/raw/master/images/deploy-to-jelastic.png)](https://jelastic.com/install-application/?manifest=https://raw.githubusercontent.com/jelastic-jps/wildfly/master/continuous-deployment/manifest.jps) 

#### 2 - Confirm installation 
Here you can specify path to your git repo and change env name, it will be your application domain.

<img src="../images/wildfly-maven-git.png" width="500"/>

#### 3 - Wait for successful deployment

<img src="../images/wildfly-successful-deployment.png" width="400"/>

#### 4 - Wait, Maven downloads dependencies 
The first time application deployment takes longer. You can check the status via Log button.  

<img src="../images/wildfly-deploy-logs.png" width="500"/>

After this point your application should be deployed and ready to handle requests. 

#### 5 - Open in browser

<img src="../images/wildfly-open-in-browser.png" width="500"/>


#### 6 - Edit deployment settings

<img src="images/wildfly-edit-deployment.png" width="500"/>

Any feedback or questions? <a href="mailto:info@jelastic.com">Drop us a message</a>. 






