import React from 'react';
import Post from '../Post';
import './css.css';

export default function List(props) {
    return (
        <div>
            <Post 
            user="perez_juan"
            img="https://instagram.faep9-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/96141683_168596981171939_3725750284808077083_n.jpg?_nc_ht=instagram.faep9-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=CMQmVcF-YuUAX-8YDnX&oh=0ddb6fbc7be175fdc9645859a583d79e&oe=5EDE1306"
            desc="Lorem Impsum es simplemente el texto de relleno de las imprentas y archivos de texto."
            likes={364}
            time="20"
            openOptions={props.openOptions}
            />
            <Post 
            user="mepasoensistemas"
            img="https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/85167617_661877847898209_1139547952866115949_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=T5rDv6fOedIAX87rTx7&oh=3fc18a7535d6ce74e93619e0c5d39667&oe=5EDB30BA"
            desc="Lorem Impsum es simplemente el texto de relleno de las imprentas y archivos de texto."
            likes={40}
            time="20"
            openOptions={props.openOptions}
            />
            <Post 
            user="anonymus"
            img="https://instagram.faep9-2.fna.fbcdn.net/v/t51.2885-15/e15/95608259_848161015693313_7026668452420113452_n.jpg?_nc_ht=instagram.faep9-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=yDSZSC3MjYsAX-NPgGL&oh=a6d8a2cb8b9d5471a66590fc304fe242&oe=5EDB2E0A"
            desc="Lorem Impsum es simplemente el texto de relleno de las imprentas y archivos de texto."
            likes={4687}
            time="20"
            openOptions={props.openOptions}
            />
            
        </div>
    )
}
