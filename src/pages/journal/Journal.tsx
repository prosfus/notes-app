import { useEffect, useState } from 'react'
import { Layout } from '../../common/components/Layout'
import { DaysBar } from './components/DaysBar'
import { TextArea } from './components/TextArea'

export const Journal = () => {
	return (
		<Layout active='Journal'>
			<div className='flex flex-col items-center w-full h-full pt-3 gap-6'>
				<DaysBar />
				<TextArea />
			</div>
		</Layout>
	)
}
