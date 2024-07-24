export const statusConstants = [
	{
		name: "To do",
		status: 0,
		buttonName: {
			action: "In progress"
		}
	},
	{
		name: "In progress",
		status: 1,
		buttonName: {
			action: "To do",
			done: "Done"
		}
	},
	{
		name: "Done",
		status: 2,
		buttonName: {
			action: "To archive",
		}
	},
]