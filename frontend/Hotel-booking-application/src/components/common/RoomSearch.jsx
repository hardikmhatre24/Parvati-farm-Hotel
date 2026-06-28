

import React, { useState } from "react"
import { Form, Button, Row, Col, Container } from "react-bootstrap"
import moment from "moment"
import { getAvailableRooms } from "../utils/ApiFunctions"
import RoomSearchResults from "./RoomSearchResult"
import RoomTypeSelector from "./RoomTypeSelector"

const RoomSearch = () => {

	const [searchQuery, setSearchQuery] = useState({
		checkInDate: "",
		checkOutDate: "",
		roomType: ""
	})

	const [errorMessage, setErrorMessage] = useState("")
	const [availableRooms, setAvailableRooms] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	/* ================= SEARCH ================= */
	const handleSearch = (e) => {
		e.preventDefault()

		const checkInMoment = moment(searchQuery.checkInDate)
		const checkOutMoment = moment(searchQuery.checkOutDate)

		if (!checkInMoment.isValid() || !checkOutMoment.isValid()) {
			setErrorMessage("Please enter valid dates")
			return
		}

		if (!checkOutMoment.isSameOrAfter(checkInMoment)) {
			setErrorMessage("Check-out date must be after check-in date")
			return
		}

		setIsLoading(true)

		getAvailableRooms(
			searchQuery.checkInDate,
			searchQuery.checkOutDate,
			searchQuery.roomType
		)
			.then((data) => {
				setAvailableRooms(data || [])
			})
			.catch((error) => {
				console.log(error)
				setAvailableRooms([])
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	/* ================= INPUT CHANGE ================= */
	const handleInputChange = (e) => {
		const { name, value } = e.target
		setSearchQuery((prev) => ({
			...prev,
			[name]: value
		}))

		setErrorMessage("")
	}

	/* ================= CLEAR ================= */
	const handleClearSearch = () => {
		setSearchQuery({
			checkInDate: "",
			checkOutDate: "",
			roomType: ""
		})
		setAvailableRooms([])
	}

	return (
		<Container className="shadow mt-n5 mb-5 py-5">

			<Form onSubmit={handleSearch}>
				<Row className="justify-content-center">

					{/* CHECK IN */}
					<Col xs={12} md={3}>
						<Form.Group>
							<Form.Label>Check-in Date</Form.Label>
							<Form.Control
								type="date"
								name="checkInDate"
								value={searchQuery.checkInDate}
								onChange={handleInputChange}
								min={moment().format("YYYY-MM-DD")}
							/>
						</Form.Group>
					</Col>

					{/* CHECK OUT */}
					<Col xs={12} md={3}>
						<Form.Group>
							<Form.Label>Check-out Date</Form.Label>
							<Form.Control
								type="date"
								name="checkOutDate"
								value={searchQuery.checkOutDate}
								onChange={handleInputChange}
								min={moment().format("YYYY-MM-DD")}
							/>
						</Form.Group>
					</Col>

					{/* ROOM TYPE */}
					<Col xs={12} md={3}>
						<Form.Group>
							<Form.Label>Room Type</Form.Label>

							<div className="d-flex">
								<RoomTypeSelector
									handleRoomInputChange={handleInputChange}
									newRoom={searchQuery}
								/>

								<Button
									variant="secondary"
									type="submit"
									className="ms-2"
								>
									Search
								</Button>
							</div>
						</Form.Group>
					</Col>

				</Row>
			</Form>

			{/* ================= RESULTS ================= */}
			{errorMessage && (
				<p className="text-danger mt-3">{errorMessage}</p>
			)}

			{isLoading ? (
				<p className="mt-4">Finding available rooms....</p>
			) : availableRooms.length > 0 ? (
				<RoomSearchResults
					results={availableRooms}
					onClearSearch={handleClearSearch}
				/>
			) : (
				<p className="mt-4">
					No rooms available for the selected dates and room type.
				</p>
			)}

		</Container>
	)
}

export default RoomSearch
