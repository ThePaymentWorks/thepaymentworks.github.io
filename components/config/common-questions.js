export const ListOfCommonQuestions = {
  general: [
    {
      question: `What are $singular Simulators?`,
      answer: `Think of a payment company sandbox or an API mock and then super-turbo-charge it - that’s our simulators. We simulate the responses of $plural API endpoints and return the exact same data that they do but with loads of extra controls for you to use.
      `,
    },
    {
      question: `How do I use a $singular Simulator?`,
      answer: `The first step is signing up for a free account (no card required) here. From there you can select any of our sims and follow our simple instructions to get up and running.`
    },
    {
      question: `How do I know your $singular Simulators are up to date?`,
      answer: `We continuously run tests against our simulators and the payment gateways real systems to ensure there are no differences between the two. This ensures consistency and gives us the burden of maintaining these systems.`,
    },
    {
      question: `Which $singular Simulator should I use?`,
      answer: `In order to pick out a simulator you first need to know what payment gateway you want to use such as stripe or paypal. Once you have decided on which one to use you can start writing tests against those simulators on our systems to get up and running.`,
    },
    {
      question: `Why should I use a $singular Simulator?`,
      answer: `Our Simulators allow you to do more than you could without them. For instance, we give you the ability to get any possible response back from the api rather than just the predetermined ones attached to test cards. This gives you the ability to handle even more scenarios and provide a much better user experience.`,
    },
    {
      question: `Do the $singular Simulators replace the native sandbox?`,
      answer: `You can use our simulators to test your systems without requiring the native sandbox, or you can use both in conjunction. It’s up to you as to which flow better suits you.`,
    },
    {
      question: `Can I use the $singular simulators in production?`,
      answer: `No. Our simulators will not act as a bypass (currently) for your requests and are not meant to be used in your production environments.`,
    },
  ],
  stripe: [],
  adyen: [],
  authipay: [],
  realex: [],
  none: [],
}
