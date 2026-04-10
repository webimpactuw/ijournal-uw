import Homepage from "../Components/Homepage";
import FeaturedArticles from "../Components/FeaturedArticles";
import {client} from '@/sanity/lib/client'

export async function getFeaturedArticles() {
  const query = `*[_type == "article" && featuredArticle == true] | order(publishDate desc){
    _id,
    title,
    subtitle,
    author,
    publishDate,
    "slug": slug.current,
    image,
    content
  }`;

  return await client.fetch(query);
}

export default async function Home() {
  const featuredArticles = await getFeaturedArticles();

  return (
    <div>
      <Homepage />
      <FeaturedArticles articles={featuredArticles} />
    </div>
  );
}
