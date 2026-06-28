import React, { useState, useEffect } from "react"
import moment from "moment"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const BookingSummary = ({ booking, payment, isFormValid, onConfirm }) => {
	const checkInDate = moment(booking.checkInDate)
	const checkOutDate = moment(booking.checkOutDate)
	const numberOfDays = checkOutDate.diff(checkInDate, "days")
	const [isBookingConfirmed, setIsBookingConfirmed] = useState(false)
	const [isProcessingPayment, setIsProcessingPayment] = useState(false)
	const navigate = useNavigate()

	// const handleConfirmBooking = () => {
	// 	setIsProcessingPayment(true)
	// 	setTimeout(() => {
	// 		setIsProcessingPayment(false)
	// 		setIsBookingConfirmed(true)
	// 		onConfirm()
	// 	}, 3000)
	// }

	const handleConfirmBooking = async () => {
	try {
		setIsProcessingPayment(true)

	const token = localStorage.getItem("token")

	const orderResponse = await api.post(
	`/payments/create-order?amount=${payment}`,
	{},
	{
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
);

		const orderId = orderResponse.data

		const options = {
			key: "rzp_live_T6wgbnKAC3mE4t",

			amount: payment * 100,

			currency: "INR",

			name: "Hotel Booking System",

			description: "Room Reservation Payment",

			order_id: orderId,

			prefill: {
				name: booking.guestFullName,
				email: booking.guestEmail
			},

			handler: async function (response) {
				console.log("Payment Success", response)

				try {
					await onConfirm()

					setIsBookingConfirmed(true)
				} catch (error) {
					console.error(error)
					alert("Booking creation failed")
				}
			},

			modal: {
				ondismiss: function () {
					setIsProcessingPayment(false)
				}
			},

			theme: {
				color: "#0d6efd"
			}
		}

		const razorpay = new window.Razorpay(options)

		razorpay.open()
	} catch (error) {
		console.error(error)

		setIsProcessingPayment(false)

		alert("Unable to initiate payment")
	}
}

	useEffect(() => {
		if (isBookingConfirmed) {
			navigate("/booking-success")
		}
	}, [isBookingConfirmed, navigate])

	return (
		<div className="row">
			<div className="col-md-6"></div>
			<div className="card card-body mt-5">
				<h4 className="card-title hotel-color">Reservation Summary</h4>
				<p>
					Name: <strong>{booking.guestFullName}</strong>
				</p>
				<p>
					Email: <strong>{booking.guestEmail}</strong>
				</p>
				<p>
					Check-in Date: <strong>{moment(booking.checkInDate).format("MMM Do YYYY")}</strong>
				</p>
				<p>
					Check-out Date: <strong>{moment(booking.checkOutDate).format("MMM Do YYYY")}</strong>
				</p>
				<p>
					Number of Days Booked: <strong>{numberOfDays}</strong>
				</p>

				<div>
					<h5 className="hotel-color">Number of Guest</h5>
					<strong>
						Adult{booking.numOfAdults > 1 ? "s" : ""} : {booking.numOfAdults}
					</strong>
					<strong>
						<p>Children : {booking.numOfChildren}</p>
					</strong>
				</div>

				{payment > 0 ? (
					<>
						<p>
							Total payment: <strong>₹{payment}</strong>
						</p>

						{isFormValid && !isBookingConfirmed ? (
							<Button variant="success" onClick={handleConfirmBooking}>
								{isProcessingPayment ? (
									<>
										<span
											className="spinner-border spinner-border-sm mr-2"
											role="status"
											aria-hidden="true"></span>
										Booking Confirmed, redirecting to payment...
									</>
								) : (
									"Proceed to payment"
								)}
							</Button>
						) : isBookingConfirmed ? (
							<div className="d-flex justify-content-center align-items-center">
								<div className="spinner-border text-primary" role="status">
									<span className="sr-only">Loading...</span>
								</div>
							</div>
						) : null}
					</>
				) : (
					<p className="text-danger">Check-out date must be after check-in date.</p>
				)}
			</div>
		</div>
	)
}

export default BookingSummary
