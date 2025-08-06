import React, { useEffect, useState } from 'react'
import { Users, CalendarCheck, AlertCircle, FlaskConical } from 'lucide-react'

const metrics = [
	{
		label: 'Total Patients',
		value: 1280,
		icon: <Users className="text-green-600" />,
		bg: 'bg-green-50',
	},
	{
		label: 'Appointments Today',
		value: 32,
		icon: <CalendarCheck className="text-blue-600" />,
		bg: 'bg-blue-50',
	},
	{
		label: 'Critical Cases',
		value: 4,
		icon: <AlertCircle className="text-red-600" />,
		bg: 'bg-red-50',
	},
	{
		label: 'Lab Reports Pending',
		value: 9,
		icon: <FlaskConical className="text-yellow-600" />,
		bg: 'bg-yellow-50',
	},
]

// Counter animation hook
const useCounter = (end, duration = 3000) => {
	const [count, setCount] = useState(0)
	useEffect(() => {
		let start = 0
		const increment = end / (duration / 16)
		const step = () => {
			start += increment
			if (start < end) {
				setCount(Math.floor(start))
				requestAnimationFrame(step)
			} else {
				setCount(end)
			}
		}
		step()
		// eslint-disable-next-line
	}, [end, duration])
	return count
}

const ProjectMetrics = () => {
	return (
		<div className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-6">
			{metrics.map((metric, idx) => {
				const animatedValue = useCounter(metric.value, 1000)
				return (
					<div
						key={idx}
						className={`rounded-xl p-4 flex items-center gap-4 shadow-sm border ${metric.bg}`}
					>
						<div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-inner">
							{metric.icon}
						</div>
						<div>
							<p className="text-gray-500 text-sm">{metric.label}</p>
							<p className="text-xl font-semibold text-gray-800">
								{animatedValue}
							</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default ProjectMetrics
