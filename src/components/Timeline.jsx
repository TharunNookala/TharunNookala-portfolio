import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineData } from "../data/timelineData";

const TimelineElement = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "rgba(242, 242, 242, .2)",
        color: "#ffffff",
        maxHeight: isExpanded ? "none" : "400px",
        transition: "max-height 0.3s ease",
      }}
      contentArrowStyle={{
        borderRight: "10px solid rgba(242, 242, 242, .1)",
      }}
      date={item?.period}
      iconStyle={{ background: "#ffffff", color: "#000000" }}
      icon={item?.icon}
      key={item.title}
    >
      <h3 className="vertical-timeline-element-title text-black font-bold text-base">
        {item?.title}
      </h3>
      <ul className="list-disc pl-5">
        {item?.description
          ?.slice(0, isExpanded ? item.description.length : 3)
          .map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
      </ul>
      {item.description.length > 3 && (
        <button className="text-blue-500 mt-2" onClick={toggleExpand}>
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </VerticalTimelineElement>
  );
};

const HorizontalTimeline = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <VerticalTimeline>
        {timelineData.map((item) => (
          <TimelineElement key={item.title} item={item} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default HorizontalTimeline;
