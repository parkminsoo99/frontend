'use client'
import {useSearchParams} from 'next/navigation'
import GoogleMap from '@/app/hooks/useGoogleMap';
import Modal from "@/app/hooks/useModal";
import {useRouter} from "next/navigation";
import {useCallback} from 'react';
export default function modalPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');
    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);
    return (
        <Modal className="object-cover aspect-square">
            <div
                className="items-center justify-center flex-col flex bg-white p-4 w-[500px] h-[480px]">
                <div className="w-[450px] h-[400px] flex items-center justify-center bg-black-500 mb-6">
                    {/* <GoogleMap realLat={lat} realLng={lng} /> */}
                </div>
                <button
                    onClick={onDismiss}
                    className="w-[150px] text-white bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-4 focus:ring-lime-600 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-lime-500 dark:hover:bg-lime-600 dark:focus:ring-lime-600">Close</button>
            </div>
        </Modal>
    );
};
