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
          <p>Last updated: 19 August 2020.</p>
          <h5>Introduction</h5>
          <p>Lapis International Pty Ltd ABN 71 640 108 238 (<span>we, us, our</span>) is committed to complying with applicable privacy laws, including in relation to the operation of our website located at www.prayersandblessings.com (<span>Website</span>).</p>
          <p>Please take a moment to read our Privacy Policy as it explains how we manage personal information including our obligations and your rights in respect of our dealings with your personal information.</p>

          <h5>Key definitions</h5>
          <p>In this Privacy Policy:</p>
          <p>• “personal information” has the meaning set out in the Privacy Act, and (in summary) means information or an opinion about an identified individual or an individual who is reasonably identifiable, whether true or otherwise; and</p>
          <p>• “Privacy Act” means the Privacy Act 1988 (Cth).</p>

          <h5>1. How we collect your personal information</h5>
          <p>We will only collect and hold your personal information in a fair and lawful way.</p>
          <p>Where it is reasonably practical to do so, we will collect your personal information directly from you. We may collect the personal information you directly give us through some of the following means:</p>
          <p>• when you input or upload your personal information (for example, name and email address) to our Website;</p>
          <p>• when you upload content to or interact with our Website or our social media pages;</p>
          <p>• when you subscribe to our services (such as our A Blessing a Day service) and mailing list;</p>
          <p>• when you contact us;</p>
          <p>• through any mobile applications provided by our organisation; or</p>
          <p>• when administering our services.</p>
          <p>In certain cases we may collect personal information about you from another party rather than from you directly. For example, if your friend sends a prayer or message to you using our Website, then they will provide your contact details to us (including your name and email address) so we can action your friend’s request.</p>

          <h5>2. Types of personal information we collect</h5>
          <p>The types of personal information we collect about you depends on the circumstances in which the information is collected. For most users of the Website, we generally only collect the name and email address of the user and of any intended recipients of communications facilitated via our Website.</p>
          <p>If you provide contract services to us or apply for employment with us, we may also collect information relevant to your engagement with us including your name, contact details, qualifications, resume and payment / invoicing details.</p>
          <p>If you do not wish to provide us with your personal information, we may not be able to provide you with the services or functionality you request via our Website.</p>

          <h5>3. Our purposes for handling your personal information</h5>
          <p>The purposes for which we collect, use and disclose your personal information will depend on the circumstances in which we collect it. In general, we collect, use and disclose your personal information so that we can provide our Website functionality and related services to you, and for other purposes with your consent or as authorised by law.</p>
          <p>Some of the specific purposes for which we collect, hold, use and disclose personal information are as follows:</p>
          <p>• so you can use the Website and receive our related services (e.g. newsletters);</p>
          <p>• to allow you to share information and messages with others via email and social media;</p>
          <p>• to consider you for a job (whether as an employee or contractor) or other relationships with us;</p>
          <p>• to comply with our legal and regulatory obligations;</p>
          <p>• to address any issues or complaints that we or you have regarding our relationship; and</p>
          <p>• to contact you regarding the above, including via electronic messaging such as SMS and email, by mail, by phone or in any other lawful manner.</p>

          <h5>4. Who we disclose your personal information to</h5>
          <p>We may disclose your personal information to third parties in connection with the purposes described in section 3 of this Privacy Policy. This may include disclosing your personal information to the following types of third parties:</p>
          <p>• our suppliers and contractors that provide us with technical and support services (e.g. Website hosting);</p>
          <p>• our lawyers and other professional advisers; and</p>
          <p>• any third parties to whom you have directed or permitted us to disclose your personal information (e.g. the recipients of any prayers or messages you send to friends or family members via the Website will include your personal details so they know who sent them the prayer / message).</p>
          <p>We may also disclose your personal information in accordance with any consent you give or where disclosure is authorised or permitted by law.</p>
          <p>If we disclose information to a third party, we generally require that the third party protect your information to the same extent that we do.</p>
          <p>If you post information to certain public parts of our Website or to our social media pages, you acknowledge that such information may be available to be viewed by the public. You should use discretion in deciding what information you upload to such sites.</p>
        
          <h5>5. Protection of personal information</h5>
          <p>We will hold personal information as either secure physical records, electronically on our intranet system, in cloud storage, and in some cases, records on third party servers. We use a range of security measures to protect the personal information we hold, including by implementing IT security tools to protect our electronic databases.</p>
          <p>We will destroy or de-identify personal information once it is no longer needed for a valid purpose or required to be kept by law.</p>
        
          <h5>6. Cookies and links to third party sites</h5>
          <p>A cookie is a small text file stored in your computer’s memory or on your hard disk for a pre-defined period of time. We use cookies to identify specific machines in order to collect aggregate information on how visitors are experiencing the Website. This information will help to better adapt the Website to suit personal requirements. While cookies allow a computer to be identified, they do not permit any reference to a specific individual. For information on cookie settings of your internet browser, please refer to your browser’s manual.</p>
          <p>Our Website may contain links to other websites operated by third parties. We not responsible for the privacy practices or the content of any third party website. Third party websites are responsible for informing you about their own privacy practices and procedures.</p>

          <h5>7. Accessing and correcting your personal information</h5>
          <p>You may contact our Privacy Officer (see section 10) to request access to the personal information that we hold about you and/or to make corrections to that information, at any time. On the rare occasions when we refuse access or refuse to correct your personal information, we will provide you with a written notice stating our reasons for such decision. We will respond to all requests for access to or correction of personal information within a reasonable time.</p>

          <h5>8. Overseas transfers of personal information</h5>
          <p>We do not generally disclose personal information to recipients located outside Australia. However, if you are a user of the Website and elect to send a message to a recipient based outside Australia, your name and email details and those of the recipient would be disclosed outside Australia (i.e. to the country in which the recipient of the message is located).</p>

          <h5>9. Resolving personal information concerns</h5>
          <p>If you have any questions, concerns or complaints about this Privacy Policy, or how we handle your personal information, please contact our Privacy Officer (see section 10). We take all complaints seriously, and will respond to your complaint within a reasonable period.</p>
          <p>If you are dissatisfied with the handling of your complaint, you may contact the Office of the Australian Information Commissioner:</p>
          <p>
            Office of the Australian Information Commissioner <br/>
            GPO Box 5218, Sydney NSW 2001 <br/>
            Telephone: 1300 363 992 <br/>
            Email: enquiries@oaic.gov.au
          </p>

          <h5>10. Contact details of Privacy Officer</h5>
          <p>
            The contact details for our Privacy Officer are as follows: <br/>
            Postal address: <i>[insert postal address]</i> <br/>
            Telephone: <i>[insert telephone number]</i> <br/>
            Email: <i>[insert e-mail address]</i>
          </p>

          <h5>11. Changes</h5>
          <p>We may change the terms of this Privacy Policy from time to time. An up-to-date copy of our Privacy Policy is available on our Website.</p>
        </div>
      </div>
    </Layout>
  );

export default PrivacyPolicy
