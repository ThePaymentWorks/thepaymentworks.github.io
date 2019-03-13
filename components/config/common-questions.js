export const ListOfCommonQuestions = {
  general: [
    {
      question: `What is a Simulator?`,
      answer: `Think of a payment company sandbox and then super-turbo-charge it - that’s our Simulators. We simulate the responses of $plural API endpoints and return the exact same data that they do but with loads of extra controls for you to use in your project.`,
    },
    {
      question: `$singular have a test mode, why should I use the Simulators?`,
      answer: `$singular have a good test system but its very limited. Our Simulators allow you to do much more. Typical test systems limit your work to a handful of pre-configured test credit cards; the Simulators give you the ability to get any possible API response and a whole lot more. In fact, the Simulators provides you with over 10 times the number of $singular scenarios that you can reproduce with $singular’s test mode. Build much better user experiences than developers using standard sandboxes.`
    },
    {
      question: `How do I start using the Simulators?`,
      answer: `It takes less than 5 minutes. Sign up your free account (no card required) here. Select the $singular API sims you need, copy your connection URL in the instruction, paste it into your local environment config, send a test transaction. Boom! All done!`,
    },
    {
      question: `How do I know the Simulator responses are up-to-date with $singular’s APIs?`,
      answer: `We continuously run test transactions against our Simulators and against the $singular systems. This lets us to detect any differences in the responses. We look for $singular changes so you don’t have to worry about tracking them.`,
    },
    {
      question: `Can I use your Simulators in production`,
      answer: `No. Our Simulators will not act as a bypass (currently) for your requests and are not meant to be used in your production environments.`,
    },
    {
      question: `Do you have Simulators than $singular?`,
      answer: `Yes. Login to your free account on TestingPays.com, search for any payment provider (example: Stripe, Paypal, Worldpay), select the Simulators you need. You can start writing code against those Simulators to get up and running.`,
    },
    {
      question: `How much does it cost?`,
      answer: `Our Starter package is absolutely free. You can select from our other packages when your projects demand. <a href="/pricing" class="text-primary">Check out our pricing plans here.</a>`,
    },
    {
      question: `How do you handle upgrading or canceling a subscription?`,
      answer: `Upgrading your subscription in between a subscription period is prorated. You are able to cancel your subscription any time.`,
    },
    {
      question: `Do Simulators replace the $singular sandbox?`,
      answer: `You can use both at different stages in your development. Our Simulators are perfect for your local dev environment where you want freedom to try anything. The Simulators are also ideal in shared integration and testing environments where you need reliable setups for manual and automated testing. We also strongly recommend using our Simulators for environments used by your own clients for user acceptance testing of new features - reliability is really important for that.<br/><br/>We then recommend using $plural test system for pre-release testing in staging and production environments.
      `,
    },
  ],
  stripe: [],
  adyen: [],
  authipay: [],
  realex: [],
  none: [],
}
