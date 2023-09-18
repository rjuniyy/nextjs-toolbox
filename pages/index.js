import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ResetForm from "@components/ResetForm";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Reset Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Header title="Reset Password" />
        <hr />
        <p className="description">Buat Password Baru dibawah ini.</p>
        <ResetForm />
      </main>
      <Footer />
    </div>
  );
}
