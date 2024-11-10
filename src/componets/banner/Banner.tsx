import { FC } from "react";
import "./banner.css";
import { Title } from "../titles/Title";
import { Button } from "./../buttons/Button";
import avatar from "../../imges/ava.webp";

type TypeBannerProps = {
  title: string;
  text: string;
  specialty: string;
};

export const Banner: FC<TypeBannerProps> = ({ title, text, specialty }) => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__block">
          <div className="banner__content">
            <h1 className="banner__specialty">{specialty}</h1>
            <Title name={title} status={"main"} />
            <p className="banner__subtitle">{text}</p>
            <div className="banner__buttons">
              <Button buttonName="projects" status="secondary" />
              <Button buttonName="code-wars" />
            </div>
          </div>
        </div>
        <div className="banner__block ">
          <div className="banner__personage">
            <svg width={0} height={0}>
              <clipPath id="clip-element">
                <path
                  d="M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.452 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z"
                  fill="currentColor"
                />
              </clipPath>
            </svg>
            <img className="banner__pic" src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};
