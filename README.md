# k8s-minikube-mongodb-query-test

creating mongodb instance and querying it from Node Express server in minikube env , you can also test it with react client

## Diagram format of the K8s architecture
<img width="700" alt="image" src="https://user-images.githubusercontent.com/74586376/171887212-5dcda6ab-864a-4a11-bd31-58f1f564444c.png">

## installation steps

```
git clone https://github.com/Rohitkk432/k8s-minikube-test.git

cd server-querier
```


First make sure you have minikube, Oracle Virtualbox, kubectl, docker desktop installed.

- To run docker we need hyperV in type1 therefore run command (in cmd as administrator) and restart.
```
bcdedit /set hypervisorlaunchtype auto
```

In server-querier file
<ul>
  <li>
    to build 
    <code>docker build . -t <docker-username>/server-querier</code>
  </li>
  <li>
    to push to dockerhub
    <code>docker push <docker-username>/server-querier</code>
  </li>
</ul>

- To run minikube we need hyperV in type2 therefore run command (in cmd as administrator) and restart.
```
bcdedit /set hypervisorlaunchtype off
```
In main repo file 

<ul>
<li>First add docker-username in server-app-deploy.yaml</li>
  
<li>then start minikube using</li>
</ul>

```
minikube start --driver=virtualbox
or
minikube start
```
<ul>
<li>then write execute commands in following order: </li>
</ul>

```
kubectl apply -f persistent-vol-claim-server-app.yaml

kubectl apply -f persistent-vol-server-app.yaml

kubectl apply -f mongodb-pod.yaml

kubectl apply -f mongodb-service.yaml

kubectl apply -f server-app-configs.yaml

kubectl apply -f server-app-deploy.yaml

kubectl apply -f server-app-service.yaml
```

<ul>
  <li>Check pods status using <code>kubectl get pod -o wide --watch</code></li>
  <li>Once everthing is running press <code>ctrl+C</code>  to stop the watch process</li>
  <li>To check the server url/ip: <code>minikube service server-app-service</code></li>
</ul>

Then you can check the end points using postman / client built:

### Installing client

<ul>
  <li>add server-url in query-client/src/functions.js to variable SERVER_URL </li>
  <li>Open terminal in query-client folder and execute : <code>npm install</code></li>
  <li>Then start the client <code>npm start</code></li>
  <li>Then you can check the endpoints using the UI made</li>
</ul>

### Additional Commands you can try
```
To check pods:
kubectl get pod

TO check services:
kubectl get service

To check logs of deployments:
kubectl logs <deployment-name-as-in-get-pod>

To check status of pods while building:
kubectl describe pod <deployment-name-as-in-get-pod>
```

To kill minikube
```
minikube delete
```
