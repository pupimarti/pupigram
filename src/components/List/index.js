import React from 'react';
import Post from '../Post';
import './css.css';

export default function List(props) {
    return (
        <div>
            <Post 
            user="leomessi"
            user_img="https://instagram.faep9-2.fna.fbcdn.net/v/t51.2885-19/s150x150/43818140_2116018831763532_3803033961098117120_n.jpg?_nc_ht=instagram.faep9-2.fna.fbcdn.net&_nc_ohc=6db8qi4phwQAX-MThZZ&oh=b506e9a72d15d64ff278666f9e5eb296&oe=5EDFBD8A"
            img="https://instagram.faep9-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/96144021_262013868284125_5495302340245040052_n.jpg?_nc_ht=instagram.faep9-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Z5B4GNO9PK4AX9AFq5t&oh=e374397f83f37a3fd0eee550073dbce9&oe=5EE1E98A"
            desc="⚽️🔙⚽️"
            likes={3132414}
            time="20"
            openOptions={props.openOptions}
            verify
            />
            <Post 
            user="thisisbillgates"
            user_img="https://instagram.faep9-2.fna.fbcdn.net/v/t51.2885-19/s150x150/23421109_395975004156731_7495220206470430720_n.jpg?_nc_ht=instagram.faep9-2.fna.fbcdn.net&_nc_ohc=Ie9qVJBNveQAX9eLkGT&oh=f527226d23f8a5455db2b4bed6e81404&oe=5EDF254A"
            img="https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-15/e35/69384304_163375064720121_2197152142992834713_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=hS_V-5BTBwEAX9u-qhB&oh=29f9064d9bbe1191c9b6b9a50084ece8&oe=5EE0D9B3"
            desc="Aliko Dangote and I have a lot in common. We both started successful businesses in the late 1970s, and for our second act in life, we both chose to start foundations. Melinda and I are lucky to have him as a partner (and friend!) in our work. Our foundations are working together to improve malnutrition in Nigeria, which could have an impact on all of Africa."
            likes={205790}
            time="20"
            openOptions={props.openOptions}
            verify
            />
            
        </div>
    )
}
