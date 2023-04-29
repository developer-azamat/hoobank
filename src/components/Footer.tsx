import { logo } from "../assets";
import styles from "../script";
import { footerLinks, socialMedia } from "../constants";
import { IFootLinks } from "./TypeFeed";

const Footer = () => {
  // footerLinks.map((item: {title:string, links:{name: string, link: string}[]})=>{
  //   item.links.map((item: {name: string, link: string})=>{
  //     console.log(item);

  //   })

  // })

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} max-w-[310px] mt-4`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((item: IFootLinks) => {
            return (
              <a className={`${styles.paragraph} text-sm`} key={item.title}>
                <h4 className={` text-[20px] text-white uppercase mb-4`}>
                  {item.title}
                </h4>
                {item.links.map((link, index) => (
                  <p className={`${styles.paragraph} my-1`} key={index}>
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </p>
                ))}
              </a>
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-medium text-[18px] leading-[27px] text-white">
          Copyright 2021 HooBank. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
            key={social.id}
             src={social.icon} 
            alt={social.id} 
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
