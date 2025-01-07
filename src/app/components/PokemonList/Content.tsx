"use client"

import { FC } from "react";
import { motion } from "motion/react";
import { Pokemon } from "@/app/types";

type ContentProps = {
    results: Pokemon[];
};

const listVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
        }
    },
};

const Content: FC<ContentProps> = ({ results }) => {
    return (
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
            <motion.ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {results.map((pokemon, index) => (
                    <motion.li 
                        key={`pokemon-result-${pokemon.name}-${index}`}
                        className="bg-white text-black p-4 rounded-lg shadow-lg transition hover:scale-105 hover:shadow-2xl font-semibold capitalize hover:text-indigo-600 text-lg"
                    >
                        {pokemon.name}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
}

export default Content;