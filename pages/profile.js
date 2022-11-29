import Layout from "../components/Layout";
import CardProfile from "../components/CardProfile";

export default function About() {
  return (
    <div className="container">
      <div className="grid grid-cols-3">
        <Layout pageTitle={"Profile"}>
          <CardProfile
            pic={"/amir.jpg"}
            f_nama={"AMIR HAKIM ADILA YAHYA"}
            f_nim={"17210253"}
            b_title={"Slicing UI Design"}
          />

          <CardProfile f_nama={"MUHAMMAD LAZUARDI AGHANI"} f_nim={"17211079"} />
          <CardProfile f_nama={"SALSABILATUL MA'WA"} f_nim={"17210903"} />
          <CardProfile f_nama={"SITI FARIDA SYAHDA"} f_nim={"17210321"} />
          <CardProfile f_nama={"RISMA LINDA"} f_nim={"17210987"} />
          <CardProfile f_nama={"IMPOSTOR"} f_nim={"??????"} />
        </Layout>
      </div>
    </div>
  );
}
