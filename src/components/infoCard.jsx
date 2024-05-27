
import Avatar from './avatar';
import BusySwitch from './busySwitch';

export default function InfoCard({ barber, admin }) {
      return (
            <div className="flex flex-col top-0 z-10">

                  <div className="bg-zinc-900 border border-zinc-900 shadow-lg rounded-2xl p-4">
                        <BusySwitch barberId={barber.id} admin={admin} />
                        <div className="relative h-32 w-full sm:mb-0 mb-3 items-center">
                              <Avatar imageUrl={barber.user.avatarUrl} />
                        </div>

                        <div>
                              <h2 className="text-center text-white text-md mt-4">{barber.shopName}</h2>
                              <h2 className="text-center text-white text-md mb-4">{barber.user.name}</h2>
                              <h2 className="text-center text-white jacquard text-3xl">Bio</h2>
                              <h2 className="text-center text-white jacquard text-xl">{barber.bio}</h2>

                        </div>
                  </div>
            </div>
      );
}
