import ReuseableBtn from "./ReuseableBtn";

export default function Button() {
  return (
    <div className="google-button">
      <ReuseableBtn BtnText="Google Search" />
      <ReuseableBtn BtnText="I'm Feeling Lucky" />
      <p className="google-offer">Google offered in: <a href="#"> العربية</a>
      </p>
    </div>
  );
}
