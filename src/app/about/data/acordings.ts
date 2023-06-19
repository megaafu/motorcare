interface IAcordingItem{
    id:number
    title:string
    description:string
}

interface IAcordings{
    acordings:IAcordingItem[]
}

 const Mission:IAcordingItem={
    id:0,
    title:'Mission',
    description: `To build a high performing environment where contributions of personnel, customers and business partners are respected. 
    Delivering a portfolio of brands and groundbreaking services to outperform our peers and deliver the highest value in the way we do business.`
}

 const Vision:IAcordingItem={
    id:1,
    title:'Vision',
    description:`To provide premier automotive solutions in emerging economies.`
}

 const Values:IAcordingItem={
    id:2,
    title:'Vision',
    description:`Professionalism: Fact based and competent in everything we do. This is how we conduct our business and how we interact with each other.
                 Respect: Mutual respect between colleagues, partners, customers and other stakeholders we interact with is fundamental for us.
                 Honesty: We aim to conduct ourselves and business matters with the utmost honesty in all that we do, ensuring that we are reliable and honor our promises and commitments.
                 Dedication: The success of every customer and partner is the key to our success.
    `
}

export const AllAcording:IAcordings={
    acordings:[
        Values,
        Mission,
        Vision,
        
    ]
}
