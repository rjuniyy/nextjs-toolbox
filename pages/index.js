import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Reset Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Reset Password" />
        <hr />
        <p className="description">Buat Password Baru dibawah ini.</p>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
