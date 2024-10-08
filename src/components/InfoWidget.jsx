import { useState } from "react";

import TabButton from "./TabButton";
import WidgetContainer from "./WidgetContainer";
import TabContent from "./TabContent";

export default function InfoWidget() {
  const [activeTab, setActiveTab] = useState("about");

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    <WidgetContainer>
      {/* Tab Headers */}
      <div className="flex justify-between items-center bg-header-background p-2 rounded-2xl h-[62px]">
        <TabButton
          label="About Me"
          isActive={activeTab === "about"}
          onClick={() => handleTabClick("about")}
        />
        <TabButton
          label="Experiences"
          isActive={activeTab === "experiences"}
          onClick={() => handleTabClick("experiences")}
        />
        <TabButton
          label="Recommended"
          isActive={activeTab === "recommended"}
          onClick={() => handleTabClick("recommended")}
        />
      </div>

      {/* Tab Content */}
      <div className="h-[210px] overflow-hidden">
        {activeTab === "about" && (
          <TabContent>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </TabContent>
        )}
        {activeTab === "experiences" && (
          <TabContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </TabContent>
        )}
        {activeTab === "recommended" && (
          <TabContent>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </TabContent>
        )}
      </div>
    </WidgetContainer>
  );
}
