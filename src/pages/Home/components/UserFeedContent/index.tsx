import Section from "../../../../components/Section";

const UserFeedContent = () => {
  return (
    <Section>
      <div>
        <textarea placeholder="What's happening?" />
      </div>
      <div>
        <h2>Your Feed</h2>
        {/* User feed content will be rendered here */}
      </div>
    </Section>
  );
};

export default UserFeedContent;
