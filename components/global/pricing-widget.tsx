import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckIcon } from "lucide-react";

function PricingWidget() {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <div className="grid md:grid-cols-3 gap-6">
        <Card
          style={{
            backgroundColor: "#121314",
            borderColor: "#313234",
            borderWidth: 2,
          }}
          className="text-white"
        >
          <CardHeader>
            <div className="flex justify-between items-center">
              <span
                className="px-4 py-1 mb-4 rounded-full border-2 text-sm font-light transition-colors hover:bg-opacity-90"
                style={{
                  backgroundColor: "#2b2c2c", // Inside background color
                  borderColor: "#6c6b6c", // Border color
                }}
              >
                Personal
              </span>
            </div>
            <div className="flex flex-row">
              <CardTitle className="text-5xl">Free</CardTitle>
            </div>
            <CardDescription style={{ color: "#9b9b9b" }} className="">
              To discover our product and it's features
            </CardDescription>
          </CardHeader>
          <Separator className="w-11/12 mx-auto mb-8" />
          <CardContent>
            <ul className="flex flex-col space-y-2">
              <li
                style={{ color: "#9b9b9b" }}
                className="flex items-center gap-2"
              >
                <CheckIcon />3 Free automations
              </li>
              <li
                style={{ color: "#9b9b9b" }}
                className="flex items-center gap-2"
              >
                <CheckIcon />
                100 tasks per month
              </li>
              <li
                style={{ color: "#9b9b9b" }}
                className="flex items-center gap-2"
              >
                <CheckIcon />
                Two-step Actions
              </li>
              <li
                style={{ color: "#9b9b9b" }}
                className="flex items-center gap-2"
              >
                <CheckIcon />
                No customer support
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full mt-4 py-6 mx-auto font-bold text-base bg-transparent text-white border-2 border-grey-500 hover:bg-gray-700 hover:border-transparent rounded">
              Learn more
            </Button>
          </CardFooter>
        </Card>
        <Card
          style={{
            backgroundColor: "#121314",
            borderColor: "#f7e9a5",
            borderWidth: 1,
          }}
          className="text-white"
        >
          <CardHeader>
            <div className="flex justify-between items-center">
              <span
                className="px-4 py-1 mb-4 rounded-full border-2 text-sm font-light transition-colors hover:bg-opacity-90"
                style={{
                  backgroundColor: "#292621", // Inside background color
                  color: "#f7e9a5", // Inside text color
                  borderColor: "#665840", // Border color
                }}
              >
                Personal Pro
              </span>
            </div>
            <div className="flex flex-row">
              <CardTitle className="text-5xl">$29</CardTitle>
              <CardDescription
                style={{ color: "#9b9b9b" }}
                className="mt-auto ml-1"
              >
                per month
              </CardDescription>
            </div>
            <CardDescription style={{ color: "#9b9b9b" }} className="">
              The best option for individuals{" "}
            </CardDescription>
          </CardHeader>
          <Separator className="w-11/12 mx-auto mb-8" />
          <CardContent>
            <ul className="flex flex-col space-y-2">
              <li
                style={{ color: "#9b9b9b" }}
                className="flex items-center gap-2"
              >
                <CheckIcon />
                100 Free automations
              </li>
              <li
                style={{ color: "#9b9b9b" }}
                className="flex items-center gap-2"
              >
                <CheckIcon />
                10,000 tasks per month
              </li>
              <li
                style={{ color: "#9b9b9b" }}
                className="flex items-center gap-2"
              >
                <CheckIcon />
                8-step Actions
              </li>
              <li
                style={{ color: "#9b9b9b" }}
                className="flex items-center gap-2"
              >
                <CheckIcon />
                Limited customer support
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full mt-4 py-6 mx-auto font-bold text-base bg-orange-300 text-black rounded">
              Try for free
            </Button>
          </CardFooter>
        </Card>
        <Card
          style={{
            backgroundColor: "#121314",
            borderColor: "#313234",
            borderWidth: 2,
          }}
          className="text-white"
        >
          <CardHeader>
            <div className="flex justify-between items-center">
              <span
                className="px-4 py-1 mb-4 rounded-full border-2 text-sm font-light transition-colors hover:bg-opacity-90"
                style={{
                  backgroundColor: "#21232e", // Inside background color
                  color: "#8cb1ff", // Inside text color
                  borderColor: "#3e4b6d", // Border color
                }}
              >
                Team
              </span>
            </div>
            <div className="flex flex-row">
              <CardTitle className="text-5xl">$99</CardTitle>
              <CardDescription
                style={{ color: "#9b9b9b" }}
                className="mt-auto ml-1"
              >
                per month
              </CardDescription>
            </div>
            <CardDescription style={{ color: "#9b9b9b" }} className="">
              Best suited for organizations
            </CardDescription>
          </CardHeader>
          <Separator className="w-11/12 mx-auto mb-8" />
          <CardContent>
            <ul className="flex flex-col space-y-2">
              <li
                style={{ color: "#9b9b9b" }}
                className="flex items-center gap-2"
              >
                <CheckIcon />
                10,000 Free automations
              </li>
              <li
                style={{ color: "#9b9b9b" }}
                className="flex items-center gap-2"
              >
                <CheckIcon />
                Unlimited tasks per month
              </li>
              <li
                style={{ color: "#9b9b9b" }}
                className="flex items-center gap-2"
              >
                <CheckIcon />
                Unlimited-step Actions
              </li>
              <li
                style={{ color: "#9b9b9b" }}
                className="flex items-center gap-2"
              >
                <CheckIcon />
                24/7 customer support
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full mt-4 py-6 mx-auto font-bold text-base">
              Try for free
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default PricingWidget;
