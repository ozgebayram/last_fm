import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ArtistCard from '../components/Cards/ArtistCard'
import { fetchError,fetchStart,fetchSuccess} from '../features/fetchSlice';
// import {,fetchError} from '../features/fetchSlice'


const Home = () => {
	// const {fetchStart,fetchSucces,fetchError} = useSelector((state)=>state.lastfm)
	const {artist,loading}= useSelector((state)=>state.lastfm)
  	// const {image,listeners,name,playcount}= artist
	const dispatch = useDispatch()

	const API_KEY=process.env.REACT_APP_API_KEY;
	// const API_KEY = "76009fc11afe69ec6725d18a763d62ec"
	const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json` 

	const getTopArtist  =async ()=>{
		dispatch(fetchStart())
		try{
			const {data} = await axios(url)
			const {
				artists:{artist},
			} = data
			// console.log(data.artists.artist);
			dispatch(fetchSuccess(data.artists.artist));
		}catch(error){
			console.log(error)
			dispatch(fetchError())
		}
		
	}
	useEffect(() => {
	getTopArtist()
	 
	}, [])
	

  return (
	<div className="flex justify-center my-4 ">
		<h1>Artist List</h1>
		{artist?.map((item,index)=>
			<ArtistCard key={index}{...item}/>
		)}
		
	</div>
  )
}

export default Home