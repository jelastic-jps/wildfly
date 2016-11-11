# WildFly Continuous Deployment Package 

[![Deploy](https://github.com/jelastic-jps/git-push-deploy/raw/master/images/deploy-to-jelastic.png)](https://jelastic.com/install-application/?manifest=https://raw.githubusercontent.com/jelastic-jps/wildfly/master/manifest.jps) 


1. Press Deploy button and choose a service provie at Jelasic Cloud Union.
2. Confirm installation. Here you can change your env name, it will be your application domain.

<img src="images/wildfly-maven-git.png" width="500"/>

3. Wait for successful deployment.

<img src="images/wildfly-successful-deployment.png" width="400"/>

4. Wait again while maven downloads all dependencies to your application based on pom.xml. It takes much longer for the first application deployment. You can the status via Log button.  

<img src="images/wildfly-deploy-logs.png" width="500"/>

5. When you successful build (or just wait for 5 minutes) and open in browser. 

<img src="images/wildfly-open-in-browser.png" width="500"/>


Any feedback or questions? <a href="mailto:info@jelastic.com">Drop us a message</a>. More automation packs are available per request. 






