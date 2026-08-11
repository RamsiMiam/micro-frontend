import {
    useCallback,
    useEffect,
    useState
} from "react";

import type { DashboardState } from "../types/DashboardState";

const DASHBOARD_ENDPOINT =
    "http://localhost:3000/dashboard";

const REFRESH_INTERVAL =
    60_000;


interface UseDashboardResult {
    data: DashboardState | null;
    loading: boolean;
    error: boolean;
}


export default function useDashboard(): UseDashboardResult {

    const [
        data,
        setData
    ] = useState<DashboardState | null>(null);


    const [
        loading,
        setLoading
    ] = useState(true);


    const [
        error,
        setError
    ] = useState(false);


    const fetchDashboard =
        useCallback(async () => {

            try {

                const response =
                    await fetch(
                        DASHBOARD_ENDPOINT
                    );


                if (!response.ok) {
                    throw new Error(
                        `HTTP ${response.status}`
                    );
                }


                const dashboard =
                    await response.json() as DashboardState;


                setData(dashboard);

                setError(false);

            }
            catch (error) {

                console.error(
                    "Dashboard request failed:",
                    error
                );

                setError(true);

            }
            finally {

                setLoading(false);

            }

        }, []);


    useEffect(() => {

        fetchDashboard();


        const interval =
            window.setInterval(
                fetchDashboard,
                REFRESH_INTERVAL
            );


        return () => {

            window.clearInterval(
                interval
            );

        };

    }, [fetchDashboard]);


    return {
        data,
        loading,
        error
    };
}
