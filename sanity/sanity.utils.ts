import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client.config";

export async function getAbouts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'abouts']{
      _id,
    _createdAt,
    "imgUrl": imgUrl.asset->url,
    title,
    description   
  }`,
    { revalidate: 10 }
  );
}

export async function getWorks() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'works']{
      _id,
    _createdAt,
    title,
    description,
    "imgUrl": imgUrl.asset->url,
    projectLink,
    codeLink, 
    tags
  }`,
    { revalidate: 10 }
  );
}

export async function getSkills() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'skills']{
      _id, 
    _createdAt,
    name,
    bgColor,
    "icon": icon.asset->url,
  }`,
    { revalidate: 10 }
  );
}

export async function getLearning() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'learning']{
      _id,
    _createdAt,
    name,
    bgColor,
    "icon": icon.asset->url,
  }`,
    { revalidate: 10 }
  );
}
