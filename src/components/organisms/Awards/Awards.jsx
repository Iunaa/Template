import AwardsList from "../../molecules/AwardsList/AwardsList";
export default function Awards() {
  return (
    <>
      <div className="awards">
        <div className="container">
          <h3 className="awards__titlePage">Awards</h3>
          <AwardsList />
          <p className="awards__footer">
            Want more awards?{" "}
            <a href="#" className="awards__footerLink">
              Explore Now
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
