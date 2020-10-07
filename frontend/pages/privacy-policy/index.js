import React, { useState } from 'react'

import { SECONDARY_PAGES } from '../../constants/routes'
import Layout from '../../components/layout'
import styles from './index.module.scss'

const PrivacyPolicy = () =>(
    <Layout classNameSection={SECONDARY_PAGES.PRIVACY_POLICY.className}>
      <div className={styles.container}>
        <span className="caption">OUR</span>
        <h2 className="title">Privacy Policy</h2>

      <div className={styles.policies}>
        <p><span style={{fontWeight:400}}>Last updated: 24 August 2020.</span></p>
        <p><strong>Introduction</strong></p>
        <p><span style={{fontWeight:400}}>Lapis International Pty Ltd ABN 71 640 108 238 (</span><strong>we, us, our</strong><span style={{fontWeight:400}}>) is committed to complying with applicable privacy laws, including in relation to the operation of our website located at www.prayersandblessings.com </span><span style={{fontWeight:400}}>(</span><strong>Website</strong><span style={{fontWeight:400}}>).&nbsp; This policy complies with the requirements of Australian privacy laws.</span></p>
        <p><span style={{fontWeight:400}}>Please take a moment to read our Privacy Policy as it explains how we manage personal information including our obligations and your rights in respect of our dealings with your personal information.&nbsp;</span></p>
        <p><span style={{fontWeight:400}}>We are committed to keeping your contact details confidential. We do not sell, rent, or lease our contact lists to third parties.&nbsp; We only disclose your personal information in very limited circumstances (e.g. to our IT service providers on a confidential basis so that they can host our Website and provide technical support, or if we are required to do so by law). See section 4 below for further details.</span></p>
        <h5>1. How we collect your personal information</h5>
        <p><span style={{fontWeight:400}}>We will only collect and hold your personal information in a fair and lawful way.&nbsp;&nbsp;</span></p>
        <p><span style={{fontWeight:400}}>Where it is reasonably practical to do so, we will collect your personal information directly from you.&nbsp; We may collect the personal information you directly give us through some of the following means:</span></p>
          <ul>
            <li style={{fontWeight:400}}><span style={{fontWeight:400}}>when you input or upload your personal information (for example, name and email address) to our Website;</span></li>
            <li style={{fontWeight:400}}><span style={{fontWeight:400}}>when you upload content to or interact with our Website or our social media pages;</span></li>
            <li style={{fontWeight:400}}><span style={{fontWeight:400}}>when you subscribe to our services (such as our 'A Blessing a Day' service) and mailing list;&nbsp;</span></li>
            <li style={{fontWeight:400}}><span style={{fontWeight:400}}>when you contact us;</span></li>
            <li style={{fontWeight:400}}><span style={{fontWeight:400}}>through any mobile applications provided by our organisation; or</span></li>
            <li style={{fontWeight:400}}><span style={{fontWeight:400}}>when administering our services.</span></li>
          </ul>
        <p><span style={{fontWeight:400}}>In certain cases, we may collect personal information about you from another party rather than from you directly.&nbsp; For example, if your friend sends a prayer or message to you using our Website, then they will provide your contact details to us (including your name and email address) so we can action your friend's request.</span></p>
        <h5>2. Types of personal information we collect</h5>
        <p><span style={{fontWeight:400}}>The types of personal information we collect about you depends on the circumstances in which the information is collected. For most users of the Website, we generally only collect the name and email address of the user and of any intended recipients of communications facilitated via our Website.&nbsp;&nbsp;&nbsp;</span></p>
        <p><span style={{fontWeight:400}}>If you provide contract services to us or apply for employment with us, we may also collect information relevant to your engagement with us including your name, contact details, qualifications, resume and payment / invoicing details.</span></p>
        <p><span style={{fontWeight:400}}>If you do not wish to provide us with your personal information, we may not be able to provide you with the services or functionality you request via our Website.&nbsp;</span></p>
        <h5>3. Our purposes for handling your personal information</h5>
        <p><span style={{fontWeight:400}}>The purposes for which we collect, use and disclose your personal information will depend on the circumstances in which we collect it.&nbsp; In general, we collect, use and disclose your personal information so that we can provide our Website functionality and related services to you, and for other purposes with your consent or as authorised by law.</span></p>
        <p><span style={{fontWeight:400}}>Some of the specific purposes for which we collect, hold, use and disclose personal information are as follows:</span></p>
            <ul>
              <li style={{fontWeight:400}}><span style={{fontWeight:400}}>so you can use the Website and receive our related services (e.g. newsletters);</span></li>
              <li style={{fontWeight:400}}><span style={{fontWeight:400}}>to allow you to share information and messages with others via email and social media;</span></li>
              <li style={{fontWeight:400}}><span style={{fontWeight:400}}>to consider you for a job (whether as an employee or contractor) or other relationships with us;</span></li>
              <li style={{fontWeight:400}}><span style={{fontWeight:400}}>to comply with our legal and regulatory obligations;&nbsp;</span></li>
              <li style={{fontWeight:400}}><span style={{fontWeight:400}}>to address any issues or complaints that we or you have regarding our relationship; and</span></li>
              <li style={{fontWeight:400}}><span style={{fontWeight:400}}>to contact you regarding the above, including via electronic messaging such as SMS and email, by mail, by phone or in any other lawful manner.</span></li>
            </ul>
        <h5>4. Who we disclose your personal information to</h5>
        <p><span style={{fontWeight:400}}>We may disclose your personal information to third parties in connection with the purposes described in section 3 of this Privacy Policy.&nbsp; This may include disclosing your personal information to the following types of third parties:</span></p>
          <ul>
            <li style={{fontWeight:400}}><span style={{fontWeight:400}}>our suppliers and contractors that provide us with technical and support services (e.g. Website hosting);&nbsp;</span></li>
            <li style={{fontWeight:400}}><span style={{fontWeight:400}}>our lawyers and other professional advisers; and</span></li>
            <li style={{fontWeight:400}}><span style={{fontWeight:400}}>any third parties to whom you have directed or permitted us to disclose your personal information (e.g. the recipients of any prayers or messages you send to friends or family members via the Website will include your personal details so they know who sent them the prayer / message).</span></li>
          </ul>
        <p><span style={{fontWeight:400}}>We may also disclose your personal information in accordance with any consent you give or where disclosure is authorised or permitted by law.</span></p>
        <p><span style={{fontWeight:400}}>If we disclose information to a third party, we generally require that the third party protect your information to the same extent that we do.</span></p>
        <p><span style={{fontWeight:400}}>If you post information to certain public parts of our Website or to our social media pages, you acknowledge that such information may be available to be viewed by the public. You should use discretion in deciding what information you upload to such sites.</span></p>
        <h5>5. Protection of personal information</h5>
        <p><span style={{fontWeight:400}}>We will hold personal information as either secure physical records, electronically on our intranet system, in cloud storage, and in some cases, records on third party servers.&nbsp; We use a range of security measures to protect the personal information we hold, including by implementing IT security tools to protect our electronic databases.</span></p>
        <p><span style={{fontWeight:400}}>We will destroy or de-identify personal information once it is no longer needed for a valid purpose or required to be kept by law.</span></p>
        <h5>6. Cookies and links to third party sites</h5>
        <p><span style={{fontWeight:400}}>A cookie is a small text file stored in your computer&rsquo;s memory or on your hard disk for a pre-defined period of time.&nbsp; We use cookies to identify specific machines in order to collect aggregate information on how visitors are experiencing the Website.&nbsp; This information will help to better adapt the Website to suit personal requirements.&nbsp; While cookies allow a computer to be identified, they do not permit any reference to a specific individual.&nbsp; For information on cookie settings of your internet browser, please refer to your browser&rsquo;s manual.&nbsp;</span></p>
        <p><span style={{fontWeight:400}}>Our Website may contain links to other websites operated by third parties.&nbsp; We not responsible for the privacy practices or the content of any third party website.&nbsp; Third party websites are responsible for informing you about their own privacy practices and procedures.</span></p>
        <h5>7. Accessing and correcting your personal information</h5>
        <p><span style={{fontWeight:400}}>You may contact our Privacy Officer (see section 10) to request access to the personal information that we hold about you and/or to make corrections to that information, at any time.&nbsp; On the rare occasions when we refuse access or refuse to correct your personal information, we will provide you with a written notice stating our reasons for such decision.&nbsp; We will respond to all requests for access to or correction of personal information within a reasonable time.</span></p>
        <h5>8. Overseas transfers of personal information</h5>
        <p><span style={{fontWeight:400}}>We do not generally disclose personal information to recipients located outside Australia.&nbsp; However, if you are a user of the Website and elect to send a message to a recipient based outside Australia, your name and email details and those of the recipient would be disclosed outside Australia (i.e. to the country in which the recipient of the message is located).</span></p>
        <h5>9. Resolving personal information concerns</h5>
        <p><span style={{fontWeight:400}}>If you have any questions, concerns or complaints about this Privacy Policy, or how we handle your personal information, please contact our Privacy Officer (see section 10).&nbsp; We take all complaints seriously, and will respond to your complaint within a reasonable period.&nbsp;&nbsp;</span></p>
        <h5>10. Contact details of Privacy Officer</h5>
        <p><span style={{fontWeight:400}}>Our Privacy Officer can be contacted at:&nbsp; </span><a href="mailto:privacy@prayersandblessings.com"><span style={{fontWeight:400}}>privacy@prayersandblessings.com</span></a></p>
        <h5>11. Changes</h5>
        <p><span style={{fontWeight:400}}>We may change the terms of this Privacy Policy from time to time. An up-to-date copy of our Privacy Policy is available on our Website.</span></p>
      </div>
      </div>
    </Layout>
  );

export default PrivacyPolicy
