"use client"

import { FC, useCallback, useMemo } from "react"

import { useRouter } from "next/navigation";
import useCountries from "../inputs/LocalCountrySelect";

import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { format } from "date-fns"
import Image from "next/image";
import HeartButton from "../HeartButton";
import Button from "../Button";

interface ListingCardProps {
    data: SafeListing;
    reservation?: SafeReservation;
    onAction?: (id: string) => void
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null
}

const ListingCard: FC<ListingCardProps> = ({ data, reservation, onAction, disabled, actionLabel, actionId = "", currentUser }) => {

    const router = useRouter();

    const { getByValue } = useCountries();

    const location = getByValue(data.locationValue);
       console.log("Data Location Value:", data.locationValue);
    console.log("Location:", location);


    const handleCancel = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        if (disabled) return;

        onAction?.(actionId);

    }, [onAction, actionId, disabled]);


    const price = useMemo(() => {
        if (reservation) {
            return reservation.totalPrice;
        }

        return data.price
    }, [reservation, data.price]);

    const reservationDate = useMemo(() => {
        if (!reservation) return null;

        const start = new Date(reservation.startDate);

        return `${format(start, 'PP')}`

    }, [reservation]);

    return (
        <div
            onClick={() => router.push(`/listings/${data.id}`)}
            className="col-span-1 cursor-pointer group"
        >
            <div className="flex flex-col gap-2 w-full h-full">
                <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                    <Image
                        fill
                        alt="Listing"
                        src={data.imageSrc}
                        className="object-cover h-full w-full group-hover:scale-110 transition"
                    />
                    <div className="absolute top-3 right-3">
                        <HeartButton
                            listingId={data.id}
                            currentUser={currentUser}
                        />
                    </div>
                </div>
                <div className="font-semibold text-lg">
                    {location?.region}, {location?.label}
                </div>
                <div className="font-light text-neutral-500">
                    {reservationDate || data.category}
                </div>
                <div className="flex items-center gap-1">
                    <div className="font-semibold">
                        Ksh {price}
                    </div>
                    {!reservation && (
                        <div className="font-light"> / month</div>
                    )}
                </div>
                {onAction && actionLabel && (
                    <Button
                        disabled={disabled}
                        small
                        label={actionLabel}
                        onClick={handleCancel}
                        mtAuto
                    />
                )}
            </div>
        </div>
    )
}

export default ListingCard