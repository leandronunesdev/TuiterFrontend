import Section from "../../../../components/Section";
import TextArea from "../../../../components/TextArea";

const UserFeedContent = () => {
  return (
    <Section>
      <div>
        <TextArea placeholder="What's happening?" />
      </div>
      <div>
        <h2>Your Feed</h2>
        {/* User feed content will be rendered here */}
      </div>
    </Section>
  );
};

export default UserFeedContent;
