import { atom } from "recoil";
// create type for storign sql database in atom
type Schema = {
    [table: string]: {
        name: string;
        type: string;
        nullable: boolean;
        default: string | null;
        primary_key: boolean;
    }[];
};

const schemaExample = {
    cabins: [
        {
            name: "id",
            type: "bigint",
            nullable: false,
            default: null,
            primary_key: true,
        },
        {
            name: "created_at",
            type: "timestamp with time zone",
            nullable: false,
            default: "now()",
            primary_key: false,
        },
        {
            name: "name",
            type: "text",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "maxCapacity",
            type: "smallint",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "regularPrice",
            type: "smallint",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "discount",
            type: "smallint",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "description",
            type: "text",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "image",
            type: "text",
            nullable: true,
            default: null,
            primary_key: false,
        },
    ],
    guests: [
        {
            name: "id",
            type: "bigint",
            nullable: false,
            default: null,
            primary_key: true,
        },
        {
            name: "created_at",
            type: "timestamp with time zone",
            nullable: false,
            default: "now()",
            primary_key: false,
        },
        {
            name: "fullName",
            type: "text",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "email",
            type: "text",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "nationalID",
            type: "text",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "nationality",
            type: "text",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "countryFlag",
            type: "text",
            nullable: true,
            default: null,
            primary_key: false,
        },
    ],
    settings: [
        {
            name: "id",
            type: "bigint",
            nullable: false,
            default: null,
            primary_key: true,
        },
        {
            name: "created_at",
            type: "timestamp with time zone",
            nullable: false,
            default: "now()",
            primary_key: false,
        },
        {
            name: "minBookingLength",
            type: "smallint",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "maxBookingLenght",
            type: "smallint",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "maxGuestsPerBooking",
            type: "smallint",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "breakfastPrice",
            type: "real",
            nullable: true,
            default: null,
            primary_key: false,
        },
    ],
    bookings: [
        {
            name: "id",
            type: "bigint",
            nullable: false,
            default: null,
            primary_key: true,
        },
        {
            name: "created_at",
            type: "timestamp with time zone",
            nullable: false,
            default: "now()",
            primary_key: false,
        },
        {
            name: "startDate",
            type: "timestamp without time zone",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "endDate",
            type: "timestamp without time zone",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "numNights",
            type: "smallint",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "numGuests",
            type: "smallint",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "cabinPrice",
            type: "real",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "extrasPrice",
            type: "real",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "totalPrice",
            type: "real",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "status",
            type: "text",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "hasBreakfast",
            type: "boolean",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "isPaid",
            type: "boolean",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "observations",
            type: "text",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "cabinID",
            type: "bigint",
            nullable: true,
            default: null,
            primary_key: false,
        },
        {
            name: "guestID",
            type: "bigint",
            nullable: true,
            default: null,
            primary_key: false,
        },
    ],
};

const schema = atom({
    key: "schema",
    default: schemaExample
});

export default schema;
