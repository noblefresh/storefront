import LoginTemplate from "@modules/account/templates/login-template"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { NextPageWithLayout } from "types/global"
import "../modules/search/templates/desktop-search-modal/app"

const Login: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Sign in" description="Sign in to your ACME account." />
      <div className="w-full flex justify-center py-24">
        <div className="max-w-xl w-full flex flex-col items-center">
        <h1 className="text-large-semi uppercase mb-6">Search for a Product</h1>
            <div id="autocomplete"></div>
        </div>
      </div>
    </>
  )
}

Login.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Login
