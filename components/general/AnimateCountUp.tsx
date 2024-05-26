"use client";

import React from 'react'
import CountUp from "react-countup"

export default function AnimateCountUp({ value }: { value: number }) {
    return (
        <CountUp
            end={value}
            decimal='.'
            decimals={2}
            prefix='$'
            duration={2}
        />
    )
}
