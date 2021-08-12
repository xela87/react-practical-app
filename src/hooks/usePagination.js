import {useMemo} from "react";

export const usePagination = (totalPages) => {

    return useMemo(() => {
        return Array.from({length: totalPages}, (v, k) => k + 1);
    }, [totalPages])
}
