/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { IoLogoTwitter, IoMdMail } from "react-icons/io"
import { FaFacebookF, FaRedditAlien } from "react-icons/fa"
import { EmailShareButton, FacebookShareButton, RedditShareButton, TwitterShareButton } from "react-share";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Post = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          publishedAt,
          shortDescription,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div>
      <section className="py-10 bg-green-50">
        <div className="max-w-4xl container mx-auto">

          <div className="flex items-center">
              <img
                src={urlFor(postData.authorImage).width(100).url()}
                alt= {`Author is ${postData.name}`}
                className="w-12 mr-3 rounded-full"
              />
              <h4>by <span className="font-semibold">{postData.name}</span> on <span className="font-semibold">{postData.publishedAt}</span></h4>
          </div>

          <div className="my-5">
            <h1 className="lg:text-5xl mb-4">{postData.title}</h1>
            <p className="text-lg text-gray-600">{postData.shortDescription}</p>
          </div>

          {/* Share section */}
          <div className="flex">
            <span className="font-semibold text-gray-600 mr-4">Share:</span>
            <ul className="flex gap-x-4">
              <li>
                <TwitterShareButton url={window.location.href} title={postData.title}>
                  <IoLogoTwitter className="inline text-xl hover:text-gray-600" />
                </TwitterShareButton>
              </li>
              <li>
                <FacebookShareButton url={window.location.href} title={postData.title}>
                  <FaFacebookF className="inline text-xl hover:text-gray-600" />
                </FacebookShareButton>
              </li>
              <li>
                <EmailShareButton url={window.location.href} title={postData.title}>
                  <IoMdMail className="inline text-xl hover:text-gray-600" />
                </EmailShareButton>
              </li>
              <li>
                <RedditShareButton url={window.location.href} title={postData.title}>
                  <FaRedditAlien className="inline text-xl hover:text-gray-600" />
                </RedditShareButton>
              </li>
            </ul>
          </div>

        </div>
      </section>

      <div class="bg-white py-12">
        <div className="xl:w-2/3 mx-auto max-w-5xl overflow-hidden px-4 lg:px-6 xl:px-0">
          <div class="aspect-w-16 aspect-h-9 mb-10">
            <img src={urlFor(postData.mainImage).url()} alt={`${postData.title}`}  className="rounded w-full h-full object-center object-cover" />
          </div>
        </div>

        <div className="max-w-4xl container mx-auto block-content">
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
    </div>
  );
}

export default Post;