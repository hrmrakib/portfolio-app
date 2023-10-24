import Link from "next/link";
import React from "react";
import { BsGithub,  BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <Link href='https://linkedin.com/in/hrmrakib' target='_blank'>
          <BsLinkedin />
        </Link>
      </div>
      <div>
        <Link href='https://www.facebook.com/hrmrakib' target='_blank'>
          <FaFacebookF />
        </Link>
      </div>
      <div>
        <Link href='https://www.github.com/hrmrakib/' target='_blank'>
          <BsGithub />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
