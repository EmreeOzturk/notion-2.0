import {createClient} from 'next-sanity'
import builder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION // "2022-11-16"
const useCdn = process.env.NODE_ENV === 'production' // true

export const client = createClient({projectId, dataset, apiVersion, useCdn})
export const urlFor = (source:any) => builder(client).image(source)