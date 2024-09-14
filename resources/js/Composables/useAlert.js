import React from "react";
import { useState } from "react";

export default function useAlert() {
    
    const AlertType = {
        failed: 'failed',
        success: 'success',
    }

    const [alertData, setAlertData] = useState({
        show: false,
        type: '',
        message: '',
        time: 2000,
        data: {}
    })

    const clearAlert = () => {
        setAlertData(() => ({
            show: false,
            type: '',
            sage: '',
            time: 2000,
        }))
    }

    const showSuccessAlert = ({ message = '', time = 2000, data = {} }) => {
        setAlertData({
            type: AlertType.success,
            message: message,
            time: time,
            show: true,
            data: data,
        })
    }

    const showFailureAlert = ({ message = '', time = 2000, data = {} }) => {
        setAlertData({
            type: AlertType.failed,
            message: message,
            time: time,
            show: true,
            data: data,
        })
    }

    return { alertData, clearAlert, setAlertData, showFailureAlert, showSuccessAlert, AlertType }
}