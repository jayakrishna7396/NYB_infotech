import React from 'react'

export default function Fragment() {
  return (
    // without Fragments
    <div>
        <h1>hello</h1>
        <p>hi</p>
    </div>
  )
}

export function Fragment1 () {
  return (
    // with Fragments
    <>
        <h1>hello</h1>
        <p>hi</p>
    </>
  )
}
