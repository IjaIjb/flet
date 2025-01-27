"use client"; // Add this for client components in the Next.js app directory
import DashboardLayout from '@/components/Layout'
import React from 'react'
import BreadcrumbsDisplay from '../../BreadscrumbsDisplay'
import { FaDownload } from "react-icons/fa";
import Image from "next/image";

const page = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/dashboard/URBAN_FLEET_PARTNER_TERMS.pdf"; // Ensure this file is hosted in the public folder
    link.download = "URBAN_FLEET_PARTNER_TERMS.pdf";
    link.click();
  };

  return (
 <DashboardLayout>
   <div className="bg-white overflow-hidden rounded-[8px] px-3 md:px-8 py-7 md:py-9">
        <BreadcrumbsDisplay />
    <div className=" py-8 px-4">
      <div className=" ">
        {/* <div className='flex justify-end'>
           <div className="lg:hidden block">
            <Image
                    aria-hidden
                    src="/notification/Layer_x0020_1.svg"
                    alt="Window icon"
                    width={20}
                    height={20}
                  />
            </div>

            <div className="hidden lg:block">
            <Image
                    aria-hidden
                    src="/notification/Layer_x0020_1.svg"
                    alt="Window icon"
                    width={45}
                    height={45}
                  />
            </div>
        </div> */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-primary uppercase">
            Urban Fleet Partners Policies
          </h1>
          <button
            onClick={downloadPDF}
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700 transition"
          >
            <FaDownload className="mr-2" />
            Download PDF
          </button>
        </div>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-primary uppercase">About Urban</h2>
            <p className="text-gray-600 mt-2">
            Urban is Africa’s most traveler-centric brand enabling travelers achieve seamless travel 
experience through the provision of bitable, accessible, available and affordable travel & 
financial services, products and tools.<br />
Urban continues to break novel grounds in the travel vertical and win new fans every day, 
but our ethos remains the same: challenge convention and provide the ultimate travel 
experience. To achieve our ethos, we have formed sustainable partnerships with the finest 
automotive, technology and lifestyle brands with the primary goal of enhancing user 
experience.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-primary uppercase">
              Who is an Urban Fleet Partner?
            </h2>
            <p className="text-gray-600 mt-2">
            Urban fleet partners are individuals, fleet managers, or vehicle leasing companies that own 
vehicles, have access to vehicles or in their custody or are transporters who are ready to 
partner with Urban for guaranteed earnings remotely and in real-time through highly 
designed and developed tech-enabled tools and dashboards.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-primary uppercase">
              Partner&apos;s Benefits
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>Steady Income: Urban Partners are assured of regular income on assigned trips and 
passenger bookings, Partners can earn more money by adding more vehicles to our 
fleet;</li>
              <li>
              Asset Financing from Our Financing Partners: This provides partners access to 
funding to increase their fleet. This benefit can be harnessed after spending six (6) 
months as Urban Fleet Partner;
              </li>
              <li>
              Fuel Financing: To ease operating cost, Urban provides partners with access to 
fueling at designated petrol stations. The payments are deducted from the partner’s 
earnings at the end of the month;

              </li>
              <li>
              Working Capital Financing: To ease operating costs, Partners can have access to 
loans at minimal interest rates for vehicle maintenance or other operational needs
              </li>
            </ul>
          </section>
          <section>
            

            <div className='flex justify-center mb-4'>
            <Image
                    aria-hidden
                    src="/notification/image5.png"
                    alt="Window icon"
                    width={400}
                    height={400}
                  />
            </div>
            <h2 className="text-xl font-semibold text-primary uppercase">
            VEHICLE QUALITY REQUIREMENTS
            </h2>
            <div className='md:flex justify-between my-8'>
            <Image
                    aria-hidden
                    src="/notification/image1.png"
                    alt="Window icon"
                    width={100}
                    height={100}
                  />

<Image
                    aria-hidden
                    src="/notification/image1.png"
                    alt="Window icon"
                    width={100}
                    height={100}
                    className='md:my-0 my-4'
                  />

<Image
                    aria-hidden
                    src="/notification/image1.png"
                    alt="Window icon"
                    width={100}
                    height={100}
                  />
            </div>
            <p className="text-gray-600 mt-2">
            To ensure that all vehicles on the Urban platform are of the highest quality, have a longer 
lifespan and provide optimum delivery in performance, these vehicles are graded into three 
(3) categories for efficiency:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>
                <strong>Grade A:</strong>  These categories of vehicles are the most recent years of manufacture, have 
the highest engine performance, cleanest bodies, good working air conditioning 
systems, complete documentation and other required aesthetics;
              </li>
              <li>
                <strong>Grade B:</strong> These categories of vehicles are of older models and may require a few 
repairs to be onboarded.

              </li>
              <li>
                <strong></strong> Vehicles that do not fit into any of the categories are deemed as failed and cannot be onboarded 
except where highlighted issues are fixed and the vehicle eventually falls into either of the listed 
categories.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary uppercase">
            ACCEPTED VEHICLE TYPES
            </h2>

            <div className='md:flex justify-between my-8'>
         <div className=''>
            <Image
                    aria-hidden
                    src="/notification/image2.png"
                    alt="Window icon"
                    width={100}
                    height={100}
                    className='flex justify-center text-center place-self-center'
                  />
                  <h5 className='text-sm'>SEDANS (4 Seaters)</h5>
</div>

<div className='md:my-0 my-4'>
            <Image
                    aria-hidden
                    src="/notification/image3.png"
                    alt="Window icon"
                    width={100}
                    height={100}
                    className='flex justify-center text-center place-self-center'
                  />
                  <h5 className='text-sm'>MINI BUSES (6-7 Seaters)</h5>
</div>
<div className=''>
            <Image
                    aria-hidden
                    src="/notification/image4.png"
                    alt="Window icon"
                    width={100}
                    height={100}
                    className='flex justify-center text-center place-self-center'
                  />
                  <h5 className='text-sm'>BUSES (12-18 Seaters)</h5>
</div>
            </div>
            <h2 className="text-xl font-semibold text-primary uppercase">
            VEHICLE INPECTIONS
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>All vehicles undergo preliminary inspections before they are onboarded or assigned 
              to routes. The preliminary inspections help to determine the grades of the vehicles;
</li>
              <li>
              The partners agree and acknowledge that Urban shall conduct regular inspections of 
the vehicles through our inspection service partners with a minimum of one 
inspection per month;
              </li>
              <li>
              For active vehicles, Partners have a two weeks period to complete all repairs flagged 
              during inspections
              </li>
              <li>
              The cost of the inspections is borne by the Partner. This cost is deductible by Urban 
              every payment cycle.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary uppercase">
              DOCUMENTATION
            </h2>
            <p className="text-gray-600 mt-2">
            Partners are to ensure that all required documents to operate within the approved city and routes 
are complete and available for inspection. These documents or copies should be kept in the vehicle 
and accessible to law enforcement where and when required.
            </p>

            <p className="text-gray-600 mt-2">
            These documents include but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>Vehicle Insurance;
              </li>
              <li>Vehicle Proof of Ownership;</li>
              <li>Vehicle License;</li>
              <li>Road Worthiness Certificate;</li>
              <li>Driver’s License;</li>
              <li>E-CMR by the Nigeria Police.</li>
              <li>Vehicle License;</li>
            </ul>
          </section>


          <section>
            <h2 className="text-xl font-semibold text-primary uppercase">
              Health, Safety, and Environment
            </h2>
            <p className="text-gray-600 mt-2">
            At Urban we take HSE very seriously. The health and safety of our Users and our Providers is of 
paramount to us; hence all precautions should be taken to ensure safety at all times.

            </p>
            <ul className="grid grid-cols-2 gap-4 mt-2 text-gray-600">
              <li>First Aid Kit</li>
              <li>Hand Sanitizers</li>
              <li>Fire Extinguisher</li>
              <li>Seat Belts</li>
              <li>Spare Tire</li>
              <li>Wheel Spanner</li>
              <li>Jack</li>
              <li>Wedge</li>
              <li>Extra Fan Belt</li>
              <li>Water</li>
            </ul>
          </section>

          
          <section>
            <h2 className="text-xl font-semibold text-primary uppercase">
              DOCUMENTATION
            </h2>
            <p className="text-gray-600 mt-2">
            Partners are onboarded upon the completion of inspections, negotiations and route assignments. 
            </p>

            <p className="text-gray-600 mt-2">
            The Partner agrees to a one (1) month probatory period to ensure a compatible partnership with 
            Urban, after which a contract is signed for a minimum period of three (3) months.
            </p>
          
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary uppercase">
            MAINTENANCE OF VEHICLES
            </h2>
            <ul className="mt-2 text-gray-600">
              <li>The Partner is responsible for the routine and corrective</li>
            </ul>
            <p className="text-gray-600 mt-2">
            HIGHWAY PENALTIES
            </p>

            <ul className="grid grid-cols-2 gap-4 mt-2 text-gray-600">
              <li>The Partner shall be responsible for the payment of any road penalties;
              </li>
              <li>The Partner shall be responsible for the payment of penalties in the case of 
              documentation default.</li>
            
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary uppercase">
            PARTNER ENGAGEMENTS
            </h2>
         
            <p className="text-gray-600 mt-2">
          The Partner shall attend all routine events scheduled by the Urban Team.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary uppercase">
            COMPLIANCE AND EARNINGS
            </h2>
            <p className="text-gray-600 mt-2">
            A Partner is compliant to Urban processes when/where:
            </p>

            <ul className="grid grid-cols-2 gap-4 mt-2 text-gray-600">
              <li>He/She adheres to the strict maintenance schedule of the vehicle(s)
              </li>
              <li>Track his/her trip records using the Urban Fleet Partner Dashboard</li>
              <li>Track his/her earnings on the Urban Fleet Partner Dashboard.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary uppercase">
            PAYMENT TERMS
            </h2>

            <ul className="grid grid-cols-2 gap-4 mt-2 text-gray-600">
              <li>Urban shall pay the Partner the commission of completed trips monthly
              </li>
              <li>Urban shall pay the Partner his/her total earnings between the 1st and 15th day of 
              the month for the trips completed in the previous month</li>
              <li>Urban shall pay the Partner the total earnings for the month as populated on the 
              Partner’s Dashboard.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary uppercase">
            CODE OF CONDUCT
            </h2>

            <ul className="grid grid-cols-2 gap-4 mt-2 text-gray-600">
              <li>Service Obsession: Urban Partner should be dedicated to providing exceptional 
service. It involves going above and beyond to ensure that vehicles are in good 
condition
              </li>
              <li>Excellence: As an Urban Partner, excellence entails the delivery of exceptional 
              service and value across the various aspects of your operations</li>
              <li>Respect: involves valuing and honoring the needs and rights of all stakeholders by 
treating them with dignity, courtesy and fairness at all times. This includes 
communicating transparently and maintaining a respectful mutually beneficial 
relationship.
              </li>

              <li> Velocity: Velocity refers to the speed of efficiency with which Fleet Partners manage 
              their operations
              </li>
              <li> Integrity: Conducting business with honesty, transparency, and ethical principles, 
both internally and externally is an important value for success as an Urban Fleet 
Partner;
              </li>
              <li> Collaboration: For Urban Fleet Partners, optimizing resources, processes and 
systems to maximize productivity, minimize waste, and deliver excellent service is 
critical to success.

              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary uppercase">Contact Us</h2>
            <p className="text-gray-600 mt-2">
              Email:{" "}
              <a
                href="mailto:hello@urban.ng"
                className="text-blue-600 hover:underline"
              >
                hello@urban.ng
              </a>{" "}
              |{" "}
              <a
                href="mailto:fleetsupport@urban.ng"
                className="text-blue-600 hover:underline"
              >
                fleetsupport@urban.ng
              </a>
            </p>
            <p className="text-gray-600">
              Phone:{" "}
              <a href="tel:+2349019195291" className="text-blue-600 hover:underline">
                +2349019195291
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
      </div>
 </DashboardLayout>
  )
}

export default page