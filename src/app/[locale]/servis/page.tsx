import React from 'react'
import Xizmatlar from '@/components/Xizmatlar'
import LandingSection from '@/components/LandingSec'
import Catalog from '@/components/Catalog'
import Ecommer from '@/components/Ecommer'
import CRM from '@/components/CRM'
import ERP from '@/components/ERP'
function page() {
  return (
    <div>
        <Xizmatlar/>
        <LandingSection/>
        <Catalog/>
        <Ecommer/>
        <CRM/>
        <ERP/>
        <LandingSection/>
        <LandingSection/>
        <LandingSection/>
    </div>
  )
}

export default page