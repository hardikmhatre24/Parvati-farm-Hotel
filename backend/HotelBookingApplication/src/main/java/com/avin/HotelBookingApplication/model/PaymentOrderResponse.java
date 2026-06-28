package com.avin.HotelBookingApplication.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PaymentOrderResponse {

    private Long bookingId;
    private String razorpayOrderId;
    private Integer amount;
}