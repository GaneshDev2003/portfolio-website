"use client"
import Project, { ProjectType } from "./project"
export default function Projects() {
  const projects:ProjectType[] = [
    {
      title: "Cloud Vault",
      description: "Fully cloud-native solutions with features including fraud monitoring and customized underwriting systems.",
      image:"/images/cloud-vault.png",
      tags:["NextJS", "FastAPI", "DynamoDB", "AWS", "PyTorch"],
      gitHubLink:"https://github.com/jayanth151002/encryptcon",
      externalLink:"https://ganesh-tech.notion.site/CloudVault-105c211857304e0e82fc83a50326cc2f?pvs=4",
    },
    {
      title: "Appian AI Challenge",
      description: "Generative-AI based Business Process Management for Health Management of Corporate Clients.",
      image:"/images/appian-ai-challenge.png",
      tags:["NextJS", "FastAPI", "Llama Index", "OpenAI", "BPM"],
      gitHubLink:"https://github.com/GaneshDev2003/appian-hackathon",
      externalLink:"https://www.canva.com/design/DAF30B1WyRo/ftb3k5GEE5Dt5DFhy5ffkQ/edit?utm_content=DAF30B1WyRo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "InstiSpace",
      description: "Community mobile applications for students of IITM with 5k+ active users.",
      image:"/images/instispace.jpg",
      tags:["Flutter", "NestJS", "GraphQL", "PostgreSQL", "AWS"],
      gitHubLink:"",
      externalLink:"https://www.canva.com/design/DAF30B1WyRo/ftb3k5GEE5Dt5DFhy5ffkQ/edit?utm_content=DAF30B1WyRo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "Investor Insights",
      description: "Application for institutional investors to monitor stocks, gain insights and find the latest news.",
      image:"/images/investor-insights.png",
      tags:["NextJS", "PyTorch", "NLTK", "Tableau"],
      gitHubLink:"https://github.com/GaneshDev2003/arcana-hackathon",
      externalLink:"https://ganesh-tech.notion.site/Investor-Insights-f4ab425849f24e59a5487f9de8cbae15?pvs=4",
    },
    {
      title: "BTC/USDT Algorithmic Trading",
      description: "An explainable ML based Algorithmic Trading Model for trading BTC/USDT in the cryptocurrency market.",
      image:"/images/algo-trading.png",
      tags:["Technical Analysis", "Data Science", "Python"],
      gitHubLink:"https://github.com/GaneshDev2003/bitcoin-algo-trading",
      externalLink:"https://www.canva.com/design/DAF5tR5nGUc/g9CaFSkLNBaPZ2IO6aEKug/edit?utm_content=DAF5tR5nGUc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "Facial Keypoint Identification using ML Resnet",
      description:"A Masked Loss based Residual Convolutional Neural Network model, to identify the main keypoints in a face. Despite the dataset lacking a lot of labelled keypoints, the model was able to attain an impressive RMSE score of 2.20",
      image:"images/facial-keypoint-detection.png",
      tags:["PyTorch", "CNN", "Kaggle"],
      gitHubLink:"",
      externalLink:"https://colab.research.google.com/drive/11NCFtgoJ1o63BT2H64c63atkWewsJYgv?usp=sharing"
    }
  ]
    return (
      <section id= "project" className="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-48 pb-6 md:pb-12 lg:pb-16 xl:pb-24">
        <div className="container px-4 md:px-6 py-12">
          <h1 className = "inline text-5xl font-bold">Projects</h1>
          <h1 className = "inline text-5xl font-bold text-primary">.</h1>
        </div>
        <div className="grid container px-4 md:px-6 gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3 px-4 md:px-6">
          {
            (projects.map((project, index)=>(
              <Project key = {index} title = {project.title} description={project.description} image = {project.image} tags = {project.tags} gitHubLink={project.gitHubLink} externalLink = {project.externalLink} ></Project>
            )))
          }
        </div>
      </section>
    )
  }
  
  