import React from 'react'

const page = () => {
  return (
    <div className='h-[100vh] p-10 mb-36 '>
        <h1 className='my-8 font-extrabold text-purple-700 text-4xl'>Shadows of science</h1>
        <p>
        Despite the strides science has made in explaining the world around us, some phenomena remain elusive. Today, we'll briefly explore three such mysteries: dark matter, ball lightning, and the placebo effect.

        </p>
        <h2 className='my-8 font-extrabold text-purple-700 text-2xl'> Dark Matter: The Universe's Invisible Glue</h2>
        <p>
        Dark matter is believed to make up 85% of the universe's mass. Its existence is inferred from the gravitational forces that hold galaxies together, forces that would otherwise be too weak to explain their structure. it's made up of particles like WIMPs no direct evidence has been found. Dark matter remains one of the universe's greatest enigmas.
        </p>
        <h2 className='my-8 font-extrabold text-purple-700 text-2xl'>The Ball Lightning: A Mysterious Glow</h2>
        <p>
        Ball lightning is a rare and eerie phenomenon—glowing orbs appearing during thunderstorms, floating unpredictably and sometimes even passing through walls. Though many theories have been proposed, from electrical discharges to plasma balls, its exact cause remains unconfirmed. Its brief appearance and unpredictability make it a challenge to study.
        </p>
        <h2 className='my-8 font-extrabold text-purple-700 text-2xl'>The Placebo Effect: The Power of Belief</h2>
        <p>The placebo effect shows that belief alone can trigger real physiological changes. People report symptom relief from treatments with no active ingredients, such as sugar pills, simply because they expect them to work. This effect highlights the profound connection between the mind and body, though it raises ethical questions in medicine.</p>
    </div>
  )
}

export default page