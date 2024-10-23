import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Work from "../components/work/work"

export default function WorkPage() {
    return (
        <Layout>
            <SEO title="Archive" />
            <Work></Work>
        </Layout>
    )
}
